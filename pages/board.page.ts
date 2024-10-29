import { Locator } from "playwright";
import { BasePage } from "./base.page";
import { expect } from "playwright/test";

export class BoardPage extends BasePage {
  private addListButton: Locator;
  private listTitleInput: Locator;
  private addListSubmit: Locator;
  readonly boardTitle: Locator;
  readonly listTitle: Locator;

  constructor(page) {
    super(page);
    this.addListButton = page.getByTestId("list-composer-button");
    this.listTitleInput = page.getByPlaceholder("Enter list name…");
    this.addListSubmit = page.getByTestId("list-composer-add-list-button");
    this.listTitle = page
      .getByTestId("list-header")
      .getByTestId("list-name-textarea");
    this.boardTitle = page.getByTestId("board-name-display");
  }

  async addList(listName: string) {
    await this.listTitleInput.fill(listName);
    await this.addListSubmit.click();
  }
}
