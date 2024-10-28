import { test as base, expect } from '@playwright/test';
import { PageManager } from '../pages/page.manager';

type MyFixtures = {
  pm: PageManager;
};

export const test = base.extend<MyFixtures>({
  pm: async ({ page }, use) => {
    const pm = new PageManager(page);
    await pm.loginPage.loginToTrello(); // Perform the login as part of the fixture.
    await use(pm); // Provide the `pm` (PageManager) object to the tests.
  },
});

export { expect };