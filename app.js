const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const fs = require('fs')
const jsdom = require('jsdom')
const useEnv = require('./env')

fs.readFile('./template/index.html', 'utf8', (err, file) => {
  if (err) {
    throw err;
  }
  const { JSDOM } = jsdom
  const dom = new JSDOM(file);
  const html = "<!DOCTYPE html>\n" + useEnv(dom.window.document).documentElement.outerHTML;
  fs.writeFile('./www/index.html', html, 'utf8', (err) => {
    if (err) {
      throw err;
    }
  });
});

const app = express();
app.use(morgan('combined'));
app.use(express.static('www'));
app.use(compression())

const server = app.listen(process.env.PORT || 3000, () => {
    const host = server.address().address
    const port = server.address().port
    console.log('Express app listening at http://%s:%s', host, port)
})
