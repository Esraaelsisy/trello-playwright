// your-test-file.spec.ts
import { test, expect } from "../fixtures/test.setup";

test('Add a Card to the "Prospects" List', async ({ pm, page }) => {
  await test.step('Create a new board named "new Board"', async () => {
    await pm.homePage.createNewBoard("new Board");
  });

  await test.step('Create a new list named "new list"', async () => {
    await pm.boardPage.addList("new list");
  });

  await test.step('Add a card named "Public Pool Amsterdam Renovation" to the "new list"', async () => {
    await pm.cardPage.addCardToList("Public Pool Amsterdam Renovation");
  });

  await test.step('Verify the card "Public Pool Amsterdam Renovation" is visible', async () => {
    await expect(
      page.locator("text=Public Pool Amsterdam Renovation")
    ).toBeVisible();
  });
});

test('Archive the "New Public Pool - Delft" Card', async ({ pm, page }) => {
  await test.step('Create a new board named "new Board"', async () => {
    await pm.homePage.createNewBoard("new Board");
  });

  await test.step('Create a new list named "new list"', async () => {
    await pm.boardPage.addList("new list");
  });

  await test.step('Add a card named "New Public Pool - Delft" to the "new list"', async () => {
    await pm.cardPage.addCardToList("New Public Pool - Delft");
  });

  await test.step('Open options for "New Public Pool - Delft" card', async () => {
    await pm.cardPage.openCardOptions("New Public Pool - Delft");
  });

  await test.step('Archive the card "New Public Pool - Delft"', async () => {
    await pm.cardPage.archiveCard();
  });

  await test.step('Verify the card "New Public Pool - Delft" is not visible', async () => {
    await expect(
      page.locator("text=New Public Pool - Delft")
    ).not.toBeVisible();
  });
});

test('Move a Card from "Prospects" to "In Progress"', async ({ pm, page }) => {
  await test.step('Create a new board named "new Board"', async () => {
    await pm.homePage.createNewBoard("new Board");
  });

  await test.step('Create a new list named "new list"', async () => {
    await pm.boardPage.addList("new list");
  });

  await test.step('Create a new list named "In Progress"', async () => {
    await pm.boardPage.addAnotherList("In Progress");
  });

  await test.step('Add a card named "Public Pool Amsterdam Renovation" to the "new list"', async () => {
    await pm.cardPage.addCardToList("Public Pool Amsterdam Renovation");
  });

  await test.step('Open options for "Public Pool Amsterdam Renovation" card', async () => {
    await pm.cardPage.openCardOptions("Public Pool Amsterdam Renovation");
  });

  await test.step('Move "Public Pool Amsterdam Renovation" card to "In Progress" list', async () => {
    await pm.cardPage.moveCardToList("In Progress");
  });

  await test.step('Verify the card "Public Pool Amsterdam Renovation" is in "In Progress" list', async () => {
    await expect(
      page.locator("text=In Progress >> text=Public Pool Amsterdam Renovation")
    ).toBeVisible();
  });
});

test('Reorder "Public Pool Amsterdam Renovation" to the Top of "In Progress"', async ({
  pm,
  page,
}) => {
  await test.step('Create a new board named "new Board"', async () => {
    await pm.homePage.createNewBoard("new Board");
  });

  await test.step('Create a new list named "new list"', async () => {
    await pm.boardPage.addList("new list");
  });

  await test.step('Add a card named "Public Pool Amsterdam Renovation" to the "new list"', async () => {
    await pm.cardPage.addCardToList("Public Pool Amsterdam Renovation");
  });

  await test.step('Open options for "Public Pool Amsterdam Renovation" card', async () => {
    await pm.cardPage.openCardOptions("Public Pool Amsterdam Renovation");
  });

  await test.step('Reorder "Public Pool Amsterdam Renovation" card to the top position', async () => {
    await pm.cardPage.reorderCardWithinList(
      "Public Pool Amsterdam Renovation",
      0
    );
  });

  await test.step('Verify the card "Public Pool Amsterdam Renovation" is at the top of the list', async () => {
    await expect(page.locator("text=In Progress >> nth=0")).toContainText(
      "Public Pool Amsterdam Renovation"
    );
  });
});
