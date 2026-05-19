import { test as base, createBdd } from 'playwright-bdd';
import { World } from './world';

export const test = base.extend<{ world: World }>({
  world: async ({ page }, use) => { 
    const world = new World(page);
    await use(world);
  },
});

export const { Given, When, Then, Before, After } = createBdd(test, { 
  worldFixture: 'world'
});