import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

export class LoginPage extends BasePage {
  private continueButton: Locator;
  private userInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userInput = page.getByTestId("username");
    this.continueButton = page
      .getByRole("button")
      .filter({ hasText: "Continue" });
    this.passwordInput = page.getByTestId("password");
    this.submitButton = page.getByRole("button").filter({ hasText: "Log in" });
  }

  async loginToTrello(
    username: any = process.env.TRELLO_USERNAME,
    password: any = process.env.TRELLO_PASSWORD
  ) {
    await this.navigateTo("https://trello.com/login");
    await this.fillInput(this.userInput, username);
    await this.clickElement(this.continueButton, { waitForVisible: true });
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.submitButton, { waitForVisible: true });

    await this.page.waitForLoadState("load");
  }
}
