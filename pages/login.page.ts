import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  private continueButton: Locator;
  private userInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;

  constructor(page) {
    super(page);
    this.userInput = page.getByTestId("username");
    this.continueButton = page
      .getByRole("button")
      .filter({ hasText: "Continue" });
    this.passwordInput = page.getByTestId("password");
    this.submitButton = page.getByRole("button").filter({ hasText: "Log in" });
  }

  async loginToTrello() {
    await this.navigateTo("https://trello.com/login");
    await this.userInput.fill("esraa.elsisy+23@gmail.com");
    await this.continueButton.click();
    await this.passwordInput.fill("trelloplaywright+1");
    await this.submitButton.click();
    await this.page.waitForLoadState("load");
  }
}
