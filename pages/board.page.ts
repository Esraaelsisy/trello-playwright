import { Locator } from "playwright";
import { BasePage } from "./base.page";
import { expect } from "playwright/test";

export class BoardPage extends BasePage {
  private addListButton: Locator;
  private listTitleInput: Locator;
  private addListSubmit: Locator;
  private addAnotherListButton: Locator;
  readonly boardTitle: Locator;
  private listTitle: Locator;

  constructor(page) {
    super(page);
    this.addListButton = page.locator('button:has-text("Add list")');
    this.listTitleInput = page.getByPlaceholder("Enter list name…");
    this.addListSubmit = page.locator('button:has-text("Add List")');
    this.addAnotherListButton = page.locator(
      'button:has-text("Add another list")'
    );
    this.listTitle = page
      .getByTestId("list-header")
      .getByTestId("list-name-textarea");
    this.boardTitle = page.getByTestId("board-name-display");
  }


  async addList(listName: string) {
    await this.addListButton.click();
    await this.listTitleInput.fill(listName);
    await this.addListSubmit.click();
    await expect(this.listTitle).toContainText(listName);
  }

  async addAnotherList(listName: string) {
    //await this.addAnotherListButton.click();
    await this.listTitleInput.fill(listName);
    await this.addListSubmit.click();
    await expect(this.listTitle.last()).toContainText(listName);
  }
}
