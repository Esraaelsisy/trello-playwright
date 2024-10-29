import { test, expect } from "../fixtures/test.setup";

test("Create a New List on Board", async ({ pm }) => {
  await test.step("Create a new board", async () => {
    await pm.homePage.createNewBoard("Bob's Pool Maintenance");
  });

  await test.step("Verify the new board is created with the correct name", async () => {
    await expect(pm.boardPage.boardTitle).toHaveText("Bob's Pool Maintenance");
  });

  await test.step('Add a list named "Prospects" to the board', async () => {
    await pm.boardPage.addList("Prospects");
  });

  await test.step('Verify the list named "Prospects" is added to the board', async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText("Prospects");
  });
});

test("Create Another List on a Board", async ({ pm }) => {
  await test.step("Create a new board", async () => {
    await pm.homePage.createNewBoard("Bob's Pool Maintenance");
  });

  await test.step("Verify the new board is created with the correct name", async () => {
    await expect(pm.boardPage.boardTitle).toHaveText("Bob's Pool Maintenance");
  });

  await test.step('Add a list named "Prospects" to the board', async () => {
    await pm.boardPage.addList("Prospects");
  });

  await test.step('Verify the list named "Prospects" is added to the board', async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText("Prospects");
  });

  await test.step('Add a list named "In Progress" to the board', async () => {
    await pm.boardPage.addList("In Progress");
  });

  await test.step('Verify the list named "Prospects" is added to the board', async () => {
    await expect(pm.boardPage.listTitle.last()).toContainText("In Progress");
  });
});
