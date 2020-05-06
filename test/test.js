const puppeteer = require('puppeteer');

const pageUrl = 'http://localhost:3003/?rid=1';

let page;
let browser;

const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width}, ${height}`],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('Page Items', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('should start with accordion', async () => {
    const button = '.navBar';
    const heading = await page.$eval(button, (e) => e.textContent);
    expect(heading).toEqual('Customer Reviews');
  });

  test('should have different products', async () => {
    const div = '.testHeader';
    const rating1 = await page.$eval(div, (e) => e.textContent);
    const newPage = 'http://localhost:3003/?rid=2';
    await page.goto(newPage);
    const rating2 = await page.$eval(div, (e) => e.textContent);
    expect(rating1).not.toEqual(rating2);
  });
});
