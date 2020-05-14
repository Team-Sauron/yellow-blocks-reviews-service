const puppeteer = require('puppeteer');

const pageUrl = 'http://54.219.25.59/?pid=1';

let page;
let browser;

const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
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
    await page.click('.navBar');
  });

  test('should start with accordion', async () => {
    const button = '.navBar';
    const heading = await page.$eval(button, (e) => e.textContent);
    expect(heading).toEqual('Customer Reviews');
  });

  test('should have different products', async () => {
    const div = '.testHeader';
    const rating1 = await page.$eval(div, (e) => e.textContent);
    const newPage = 'http://54.219.25.59/?pid=2';
    await page.goto(newPage);
    await page.click('.navBar');
    const rating2 = await page.$eval(div, (e) => e.textContent);
    expect(rating1).not.toEqual(rating2);
  });

  test('should have a review section', async () => {
    const div = '.reviewText';
    const disclaimer = await page.$eval(div, (e) => e.textContent);
    expect(disclaimer).toBeDefined();
  });

  test('should have at least one picture', async () => {
    const img = '.reviewPicture';
    const src = await page.$eval(img, (e) => e.getAttribute('src'));
    expect(src).toBe('https://fec-reviews-pics.s3-us-west-1.amazonaws.com/WebP/01.webp');
  });

  test('should have thumbs up/down function', async () => {
    const up = '.up';
    const down = '.down';
    const testUp = await page.$eval(up, (e) => e.getAttribute('aria-label'));
    const testDown = await page.$eval(down, (e) => e.getAttribute('aria-label'));
    expect(testUp).toBe('thumbup');
    expect(testDown).toBe('thumbdown');
  });
});
