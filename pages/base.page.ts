import { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  /**
   * Clicks on an element after ensuring it is attached (and optionally visible).
   * @param selector - The CSS selector for the element to click.
   * @param options - Additional options: `waitForVisible` and `timeout`.
   */
  async clickElement(
    locator: Locator,
    options: { waitForVisible?: boolean; timeout?: number } = {}
  ) {
    const { waitForVisible = true, timeout = 50000 } = options;

    // Wait for the element to be attached to the DOM
    await locator.waitFor({ state: "attached", timeout });

    // Optionally, wait for the element to be visible
    if (waitForVisible) {
      await locator.waitFor({ state: "visible", timeout });
    }

    // Perform the click action
    await locator.click();
  }

  async fillInput(selector: Locator, text: string) {
    await selector.fill(text);
  }

  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }

  async isElementVisible(selector: string): Promise<boolean> {
    return this.page.isVisible(selector);
  }
}
