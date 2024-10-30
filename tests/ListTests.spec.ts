import { test, expect } from "../fixtures/test.setup";
import testData from "../data/test-data.json";

test("Create a New List on Board", async ({ pm }) => {
  await test.step("Create a new board", async () => {
    await pm.homePage.createNewBoard(testData.board.name);
  });

  await test.step("Verify the new board is created with the correct name", async () => {
    await expect(pm.boardPage.boardTitle).toHaveText(testData.board.name);
  });

  await test.step(`Add a list named "${testData.lists[0].name}" to the board`, async () => {
    await pm.boardPage.addList(testData.lists[0].name);
  });

  await test.step(`Verify the list named "${testData.lists[0].name}" is added to the board`, async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText(
      testData.lists[0].name
    );
  });
});

test("Create Another List on a Board", async ({ pm }) => {
  await test.step("Create a new board", async () => {
    await pm.homePage.createNewBoard(testData.board.name);
  });

  await test.step("Verify the new board is created with the correct name", async () => {
    await expect(pm.boardPage.boardTitle).toHaveText(testData.board.name);
  });

  await test.step(`Add a list named "${testData.lists[0].name}" to the board`, async () => {
    await pm.boardPage.addList(testData.lists[0].name);
  });

  await test.step(`Verify the list named "${testData.lists[0].name}" is added to the board`, async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText(
      testData.lists[0].name
    );
  });

  await test.step(`Add a list named "${testData.lists[1].name}" to the board`, async () => {
    await pm.boardPage.addList(testData.lists[1].name);
  });

  await test.step(`Verify the list named "${testData.lists[1].name}" is added to the board`, async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText(
      testData.lists[1].name
    );
  });
});
