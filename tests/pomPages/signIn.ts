import { Page } from "playwright";
import COMMONBASE from "./commonBase";

export class SIGNINPAGE extends COMMONBASE {
  constructor(page: Page) {
    super(page);
  }

  SignINButton = () =>
    this.page.locator(
      "//div[@class='panel header']//a[contains(text(),'Sign In')]"
    );

  async ClickingTheSignInButton(): Promise<void> {
    await this.SignINButton().click();
    await this.page.pause();
  }
}
