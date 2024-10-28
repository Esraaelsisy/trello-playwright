import { Locator } from "@playwright/test";
import { BasePage } from "./base.page.ts";

export class HomePage extends BasePage {
  private createButton: Locator;
  private createBoardButton: Locator;
  private boardTitleInput: Locator;
  private createBoardSubmit: Locator;

  constructor(page) {
    super(page);
    this.createButton = page.locator(
      'button[aria-label="Create board or Workspace"]'
    );
    this.createBoardButton = page.locator(
      'button[data-testid="header-create-board-button"]'
    );
    this.boardTitleInput = page.locator(
      'input[data-testid="create-board-title-input"]'
    );
    this.createBoardSubmit = page.locator(
      'button[data-testid="create-board-submit-button"]:has-text("Create")'
    );
  }

  async createNewBoard(boardName: string) {
    await this.createButton.click();
    await this.createBoardButton.click();
    await this.boardTitleInput.fill(boardName);
    await this.createBoardSubmit.click();
    await this.waitForElement(`text=${boardName}`);
  }
}
