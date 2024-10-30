import { Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class CardPage extends BasePage {
  readonly cardTitle: Locator;
  private moveCardButton: Locator;
  private moveCardListOptions: Locator;
  private moveCardSubmitButton: Locator;
  private archiveCardButton: Locator;
  private moveCardPositionSelector: Locator;

  constructor(page) {
    super(page);
    this.cardTitle = page.getByTestId("list-card");
    this.moveCardButton = page.getByTestId("quick-card-editor-move");
    this.moveCardListOptions = page.getByTestId(
      "move-card-popover-select-list-destination"
    );
    this.moveCardSubmitButton = page.getByTestId(
      "move-card-popover-move-button"
    );
    this.archiveCardButton = page.locator('button:has-text("Archive")');
    this.moveCardPositionSelector = page.getByTestId(
      "move-card-popover-select-position"
    );
  }

  async openCardOptions(cardName: string) {
    const card = this.cardTitle.filter({ hasText: cardName });
    await card.click({ button: "right" });
  }

  async openCard(cardName: string) {
    const card = this.cardTitle.filter({ hasText: cardName });
    await this.clickElement(card, { waitForVisible: true });
  }

  async archiveCard() {
    await this.clickElement(this.archiveCardButton, { waitForVisible: true });
  }

  async moveCardToList(targetListName: string) {
    await this.clickElement(this.moveCardButton, { waitForVisible: true });
    await this.clickElement(this.moveCardListOptions, { waitForVisible: true });
    const targetListOption = this.page.locator(
      `div[role="option"]:has-text("${targetListName}")`
    );
    await this.clickElement(targetListOption, { waitForVisible: true });
    await this.clickElement(this.moveCardSubmitButton, {
      waitForVisible: true,
    });
  }

  async reorderCardIntoList(targetPosition: number) {
    await this.clickElement(this.moveCardButton, { waitForVisible: true });
    await this.clickElement(this.moveCardPositionSelector, {
      waitForVisible: true,
    });
    const targetPositionOption = this.page.locator(
      `div[role="option"]:has-text("${targetPosition}")`
    );
    await this.clickElement(targetPositionOption, { waitForVisible: true });
    await this.clickElement(this.moveCardSubmitButton, {
      waitForVisible: true,
    });
  }
}
