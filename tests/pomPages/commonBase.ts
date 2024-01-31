import { Page } from "playwright";

export default class COMMONBASE {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(`${url}`);
    await this.page.waitForLoadState("domcontentloaded");
  }
}
