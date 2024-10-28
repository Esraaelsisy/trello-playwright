import { test, expect } from "../fixtures/test.setup";

test("Create a New List on Board", async ({ pm }) => {
  await test.step('Create a new board named "neeew"', async () => {
    await pm.homePage.createNewBoard("neeew");
  });

  await test.step('Add a list named "Prospects" to the board', async () => {
    await pm.boardPage.addList("Prospects");
  });
});
