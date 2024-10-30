import { Locator } from "playwright";
import { BasePage } from "./base.page";
import { expect } from "playwright/test";

export class BoardPage extends BasePage {
  private addListButton: Locator;
  private listTitleInput: Locator;
  private addListSubmit: Locator;
  readonly boardTitle: Locator;
  readonly listTitle: Locator;
  private addCardButton: Locator;
  private cardTitleInput: Locator;
  private addCardSubmit: Locator;

  constructor(page) {
    super(page);
    this.addListButton = page.getByTestId("list-composer-button");
    this.listTitleInput = page.getByPlaceholder("Enter list name…");
    this.addListSubmit = page.getByTestId("list-composer-add-list-button");
    this.listTitle = page
      .getByTestId("list-header")
      .getByTestId("list-name-textarea");
    this.boardTitle = page.getByTestId("board-name-display");
    this.addCardButton = page.locator('button:has-text("Add a card")');
    this.cardTitleInput = page.getByTestId("list-card-composer-textarea");
    this.addCardSubmit = page //getByTestId("list-card-composer-add-card-button");
      .locator('button:has-text("Add card")');
  }

  async addList(listName: string) {
    await this.fillInput(this.listTitleInput, listName);
    await this.clickElement(this.addListSubmit, { waitForVisible: true });
  }

  async addCardToList(cardName: string) {
    await this.clickElement(this.addCardButton.first(), {
      waitForVisible: true,
    });
    await this.fillInput(this.cardTitleInput, cardName);
    await this.clickElement(this.addCardSubmit, { waitForVisible: true });
  }
  async addAnotherCardToList(cardName: string) {
    await this.fillInput(this.cardTitleInput, cardName);
    await this.clickElement(this.addCardSubmit, { waitForVisible: true });
  }
}
