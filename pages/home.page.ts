import { Locator } from "@playwright/test";
import { BasePage } from "./base.page.ts";

export class HomePage extends BasePage {
  private createButton: Locator;
  private createBoardButton: Locator;
  private boardTitleInput: Locator;
  private createBoardSubmit: Locator;

  constructor(page) {
    super(page);
    this.createButton = page.getByTestId("header-create-menu-button");
    this.createBoardButton = page.getByTestId("header-create-board-button");
    this.boardTitleInput = page.getByTestId("create-board-title-input");
    this.createBoardSubmit = page.getByTestId("create-board-submit-button");
  }

  async createNewBoard(boardName: string) {
    await this.createButton.click();
    await this.createBoardButton.click();
    await this.boardTitleInput.fill(boardName);
    await this.createBoardSubmit.click();
  }
}
