import App from './components/App/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { runtimeConfig } from './config';
import serialize from 'serialize-javascript'; // Safer stringify, prevents XSS attacks
import morgan from 'morgan';
import compression from 'compression';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint]
    ? assets[entrypoint].css
      ? assets[entrypoint].css
          .map(asset => `<link rel="stylesheet" href="${asset}">`)
          .join('')
      : ''
    : '';
};

const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => {
  return assets[entrypoint]
    ? assets[entrypoint].js
      ? assets[entrypoint].js
          .map(asset => `<script src="${asset}"${extra}></script>`)
          .join('')
      : ''
    : '';
};

const theme = runtimeConfig.THEME === 'Dark' ? 'dark.css' : 'light.css';

const server = express();
if (process.env.NODE_ENV === 'production') {
  server.use(morgan('combined'));
  server.use(compression());
}

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>,
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="${runtimeConfig.LANG || 'en'}">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title >${runtimeConfig.META_TITLE}</title>
        <meta name="description" content="${runtimeConfig.META_DESCRIPTION}">
        <meta name="author" content="${runtimeConfig.META_AUTHOR}">
        <meta name="robots" content="${
          runtimeConfig.META_INDEX_STATUS || 'noindex'
        }">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&amp;display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/${theme}">
        <link rel="stylesheet" href="css/brands.css">
        ${cssLinksFromAssets(assets, 'client')}
        <link rel="icon" type="image/png" href="${runtimeConfig.FAVICON_URL}">
        ${
          runtimeConfig.GA_TRACKING_ID
            ? `
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=${runtimeConfig.GA_TRACKING_ID}"></script>
            <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${runtimeConfig.GA_TRACKING_ID}');
      </script>`
            : ''
        }
        ${
          runtimeConfig.UMAMI_WEBSITE_ID && runtimeConfig.UMAMI_APP_URL
            ? `
            <!-- Umami Analytics -->
            <script async defer data-website-id="${runtimeConfig.UMAMI_WEBSITE_ID}" src="${runtimeConfig.UMAMI_APP_URL}/umami.js">
            </script>`
            : ''
        }

    </head>
    <body>
        <div id="root">${markup}</div>
        <script>window.env = ${serialize(runtimeConfig)};</script>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
    </body>
    </html>`,
      );
    }
  });

export default server;
