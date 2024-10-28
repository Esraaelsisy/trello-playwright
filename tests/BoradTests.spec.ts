import { test, expect } from "../fixtures/test.setup";

test("Create a New Trello Board", async ({ pm, page }) => {
  await test.step('Create a new board named "Bob\'s Pool Maintenance"', async () => {
    await pm.homePage.createNewBoard("Bob's Pool Maintenance");
  });

  await test.step("Verify the new board is created with the correct name", async () => {
    await expect(pm.boardPage.boardTitle).toHaveText("Bob's Pool Maintenance");
  });
});
