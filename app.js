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
  fs.writeFile('./docs/index.html', html, 'utf8', (err) => {
    if (err) {
      throw err;
    }
  });
});