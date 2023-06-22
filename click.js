const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.example.com'); // измените на нужный URL

  await page.click('#myButton'); // замените "myButton" на идентификатор вашего элемента

  await browser.close();
})();
