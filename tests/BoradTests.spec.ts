import { test, expect } from "../fixtures/test.setup";
import testData from "../data/test-data.json";

test("Create a New Trello Board", async ({ pm, page }) => {
  await test.step(`Create a new board named "${testData.board.name}"`, async () => {
    await pm.homePage.createNewBoard(testData.board.name);
  });

  await test.step("Verify the new board is created with the correct name", async () => {
    await expect(pm.boardPage.boardTitle).toHaveText(testData.board.name);
  });
});
