import { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async clickElement(selector: string) {
    await this.page.click(selector);
  }

  async fillInput(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async isElementVisible(selector: string): Promise<boolean> {
    return this.page.isVisible(selector);
  }
}
