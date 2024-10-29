import { Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class CardPage extends BasePage {
  private addCardButton: Locator;
  private cardTitleInput: Locator;
  private addCardSubmit: Locator;
  readonly cardTitle: Locator;
  private moveCardButton: Locator;
  private moveCardListOptions: Locator;
  private moveCardSubmitButton: Locator;
  private archiveCardButton: Locator;
  private moveCardPositionSelector: Locator;

  constructor(page) {
    super(page);
    this.addCardButton = page.getByTestId("list-add-card-button");
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
    this.moveCardPositionSelector = page.getByTestId(
      "move-card-popover-select-position"
    );
  }

  async addCardToList(cardName: string) {
    await this.addCardButton.first().click();
    await this.cardTitleInput.fill(cardName);
    await this.addCardSubmit.click();
    expect(this.cardTitle.filter({ hasText: cardName })).toBeVisible;
  }

  async addAnotherCardToList(cardName: string) {
    await this.cardTitleInput.fill(cardName);
    await this.addCardSubmit.click();
    expect(this.cardTitle.filter({ hasText: cardName })).toBeVisible;
  }

  async openCardOptions(cardName: string) {
    await this.cardTitle
      .filter({ hasText: cardName })
      .click({ button: "right" });
  }

  async moveCardToListOlD(cardName: string, targetListName: string) {
    const card = this.page.locator("text=${cardName}");
    const targetList = this.page.getByLabel(targetListName);
    await card.dragTo(targetList);
  }

  async reorderCardWithinList(cardName: string, targetPosition: number) {
    // Locate the card based on its text to ensure we select the right one
    const card = this.page
      .getByTestId("card-name")
      .filter({ hasText: cardName });

    // Wait for the card to be visible and enabled before dragging
    await expect(card).toBeVisible();
    await expect(card).toBeEnabled();

    // Locate the target position within the list where we want to drag the card
    const targetPositionLocator = this.page
      .getByTestId("list-cards")
      .nth(targetPosition);

    // Ensure target position is visible before the drag-and-drop action
    await expect(targetPositionLocator).toBeVisible();

    // Drag the card to the target position
    await card.dragTo(targetPositionLocator, { timeout: 60000 }); // Extended timeout for stability
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
    await this.moveCardSubmitButton.click();
  }

  async moveCardIntoList(targetPosition: any) {
    await this.moveCardButton.click();
    await this.moveCardPositionSelector.click();
    await this.page
      .locator('div[role="option"]:has-text("' + targetPosition + '")')
      .click();
    await this.moveCardSubmitButton.click();
  }
}
