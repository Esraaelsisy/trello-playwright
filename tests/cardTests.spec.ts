import { test, expect } from "../fixtures/test.setup";
import testData from "../data/test-data.json";

test('Add a Card to the "Prospects" List', async ({ pm, page }) => {
  await test.step("Create a new board", async () => {
    await pm.homePage.createNewBoard(testData.board.name);
  });

  await test.step(`Create a new list named "${testData.lists[0].name}"`, async () => {
    await pm.boardPage.addList(testData.lists[0].name);
  });

  await test.step(`Verify the list named "${testData.lists[0].name}" is added to the board`, async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText(
      testData.lists[0].name
    );
  });

  await test.step(`Add a card named "${testData.cards[0].name}" to the "${testData.lists[0].name}" list`, async () => {
    await pm.boardPage.addCardToList(testData.cards[0].name);
  });

  await test.step(`Verify the card "${testData.cards[0].name}" is visible`, async () => {
    await expect(
      pm.cardPage.cardTitle.filter({
        hasText: testData.cards[0].name,
      })
    ).toBeVisible();
  });
});

test('Archive the "New Public Pool - Delft" Card', async ({ pm, page }) => {
  await test.step("Create a new board", async () => {
    await pm.homePage.createNewBoard(testData.board.name);
  });

  await test.step(`Create a new list named "${testData.lists[0].name}"`, async () => {
    await pm.boardPage.addList(testData.lists[0].name);
  });

  await test.step(`Verify the list named "${testData.lists[0].name}" is added to the board`, async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText(
      testData.lists[0].name
    );
  });

  await test.step(`Add a card named "${testData.cards[0].name}" to the "${testData.lists[0].name}" list`, async () => {
    await pm.boardPage.addCardToList(testData.cards[0].name);
  });

  await test.step(`Verify the card "${testData.cards[0].name}" is visible`, async () => {
    await expect(
      pm.cardPage.cardTitle.filter({
        hasText: testData.cards[0].name,
      })
    ).toBeVisible();
  });

  await test.step(`Open options for "${testData.cards[0].name}" card`, async () => {
    await pm.cardPage.openCardOptions(testData.cards[0].name);
  });

  await test.step(`Archive the card "${testData.cards[0].name}"`, async () => {
    await pm.cardPage.archiveCard();
  });

  await test.step(`Verify the card "${testData.cards[0].name}" is not visible`, async () => {
    await expect(
      pm.cardPage.cardTitle.filter({
        hasText: testData.cards[0].name,
      })
    ).not.toBeVisible();
  });
});

test('Move a Card from "Prospects" to "In Progress"', async ({ pm, page }) => {
  await test.step("Create a new board", async () => {
    await pm.homePage.createNewBoard(testData.board.name);
  });

  await test.step("Verify the new board is created with the correct name", async () => {
    await expect(pm.boardPage.boardTitle).toHaveText(testData.board.name);
  });

  await test.step(`Create a new list named "${testData.lists[0].name}"`, async () => {
    await pm.boardPage.addList(testData.lists[0].name);
  });

  await test.step(`Verify the list named "${testData.lists[0].name}" is added to the board`, async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText(
      testData.lists[0].name
    );
  });

  await test.step(`Create a new list named "${testData.lists[1].name}"`, async () => {
    await pm.boardPage.addList(testData.lists[1].name);
  });

  await test.step(`Verify the list named "${testData.lists[1].name}" is added to the board`, async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText(
      testData.lists[1].name
    );
  });

  await test.step(`Add a card named "${testData.cards[0].name}" to the "${testData.lists[0].name}" list`, async () => {
    await pm.boardPage.addCardToList(testData.cards[0].name);
  });

  await test.step(`Verify the card "${testData.cards[0].name}" is visible`, async () => {
    await expect(
      pm.cardPage.cardTitle.filter({
        hasText: testData.cards[0].name,
      })
    ).toBeVisible();
  });

  await test.step(`Open options for "${testData.cards[0].name}" card`, async () => {
    await pm.cardPage.openCardOptions(testData.cards[0].name);
  });

  await test.step(`Move "${testData.cards[0].name}" card to "${testData.lists[1].name}" list`, async () => {
    await pm.cardPage.moveCardToList(testData.lists[1].name);
  });

  await test.step(`Verify the card "${testData.cards[0].name}" is in "${testData.lists[1].name}" list`, async () => {
    await expect(
      page
        .locator('div[data-testid="list"]', { hasText: testData.lists[1].name })
        .locator('div[data-testid="card-name"]', {
          hasText: testData.cards[0].name,
        })
    ).toBeVisible();
  });
});

test('Reorder "New Public Pool - Delft" to the Top of "Prospects"', async ({
  pm,
  page,
}) => {
  await test.step("Create a new board", async () => {
    await pm.homePage.createNewBoard(testData.board.name);
  });

  await test.step(`Create a new list named "${testData.lists[0].name}"`, async () => {
    await pm.boardPage.addList(testData.lists[0].name);
  });

  await test.step(`Verify the list named "${testData.lists[0].name}" is added to the board`, async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText(
      testData.lists[0].name
    );
  });

  await test.step(`Add a card named "${testData.cards[0].name}" to the "${testData.lists[0].name}" list`, async () => {
    await pm.boardPage.addCardToList(testData.cards[0].name);
  });

  await test.step(`Verify the card "${testData.cards[0].name}" is visible`, async () => {
    await expect(
      pm.cardPage.cardTitle.filter({
        hasText: testData.cards[0].name,
      })
    ).toBeVisible();
  });

  await test.step(`Add a card named "${testData.cards[1].name}" to the "${testData.lists[0].name}" list`, async () => {
    await pm.boardPage.addAnotherCardToList(testData.cards[1].name);
  });

  await test.step(`Verify the card "${testData.cards[1].name}" is visible`, async () => {
    await expect(
      pm.cardPage.cardTitle.filter({
        hasText: testData.cards[1].name,
      })
    ).toBeVisible();
  });

  await test.step(`Open options for "${testData.cards[1].name}" card`, async () => {
    await pm.cardPage.openCardOptions(testData.cards[1].name);
  });

  await test.step(`Reorder "${testData.cards[1].name}" card to the top position`, async () => {
    await pm.cardPage.reorderCardIntoList(
      testData.actions.reorderCard.position
    );
  });

  await test.step(`Verify the card "${testData.cards[1].name}" is at the top of the list`, async () => {
    await expect(page.getByTestId("list-cards").nth(0)).toContainText(
      testData.cards[1].name
    );
  });
});
