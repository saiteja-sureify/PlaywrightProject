import { test, Page } from "@playwright/test";
import { SIGNINPAGE } from "../pomPages/signIn";
import COMMONBASE from "../pomPages/commonBase";

let page: Page;
let signInPage: SIGNINPAGE;
let commonBase: COMMONBASE;

let url: string = "https://magento.softwaretestingboard.com/";

test.beforeAll(async ({ browser }) => {
   page = await browser.newPage();
   signInPage= new SIGNINPAGE(page);
   commonBase= new COMMONBASE(page);
});
test.use({
  viewport: { width: 1536, height: 776 },
  launchOptions: {
    slowMo: 300, //This option will sets the execution speed of the test.
  },
});

test.describe("Creation of Interactive Items - Video Module ", () => {
  test(`Performing the End to End TC of `, async () => {
    await test.step("Open application & Enter URL", async () => {
      await commonBase.navigate(url);
    });

    await test.step("Open application & Enter URL", async () => {
      await signInPage.ClickingTheSignInButton();
    });
  });
});
