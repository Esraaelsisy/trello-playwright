import { Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class CardPage extends BasePage {
  private addCardButton: Locator;
  private cardTitleInput: Locator;
  private addCardSubmit: Locator;
  private cardTitle: Locator;
  private moveCardButton: Locator;
  private moveCardListOptions: Locator;
  private moveCardSubmitButton: Locator;
  private archiveCardButton: Locator;

  constructor(page) {
    super(page);
    this.addCardButton = page.locator('button:has-text("Add a card")');
    this.cardTitleInput = page.getByPlaceholder(
      "Enter a title or paste a link"
    );
    this.addCardSubmit = page.getByTestId("list-card-composer-add-card-button");
    this.cardTitle = page.getByTestId("trello-card");
    this.moveCardButton = page.getByTestId("quick-card-editor-move");
    this.moveCardListOptions = page.getByTestId(
      "move-card-popover-select-list-destination"
    );
    this.moveCardSubmitButton = page.getByTestId(
      "move-card-popover-move-button"
    );
    this.archiveCardButton = page.getByTestId("quick-card-editor-archive");
  }

  async addCardToList(cardName: string) {
    await this.addCardButton.first().click();
    await this.cardTitleInput.fill(cardName);
    await this.addCardSubmit.click();
    expect(this.cardTitle.filter({ hasText: cardName })).toBeVisible;
  }

  async openCardOptions(cardName: string) {
    await this.cardTitle
      //.filter({ hasText: cardName })
      .click({ button: "right" });
  }

  async moveCardToListOlD(cardName: string, targetListName: string) {
    const card = this.page.locator("text=${cardName}");
    const targetList = this.page.getByLabel(targetListName);
    await card.dragTo(targetList);
  }

  async reorderCardWithinList(cardName: string, targetPosition: number) {
    const card = this.page.locator(`text=${cardName}`);
    await card.dragTo(this.page.locator("div.list-card").nth(targetPosition));
  }

  async archiveCard() {
    await this.archiveCardButton.click();
  }

  async moveCardToList(targetListName: any) {
    await this.moveCardButton.click();
    await this.moveCardListOptions.click();
    await this.page
      .locator('div[role="option"]:has-text("' + targetListName + '")')
      .click();
    await expect(this.moveCardSubmitButton).toBeVisible();
    await this.moveCardSubmitButton.click();
  }
}
