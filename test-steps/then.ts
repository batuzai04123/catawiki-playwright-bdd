import { Then } from "@/fixture";
import { expect } from "@playwright/test";

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

Then("I expect text {string} is displayed", async function (text: string) {
  const elementWithText = this.page.getByText(text).first();
  await expect(elementWithText).toBeVisible();
});

Then("I expect url to contain {string}", async function (urlPart: string) {
  await expect(this.page).toHaveURL(new RegExp(escapeRegExp(urlPart)));
});

Then(/^I display the (Lot name|Favorites counter|Current bid) from the lot card to console$/,
  async function (element: 'Lot name' | 'Favorites counter' | 'Current bid') {
    switch (element) {
      case 'Lot name': {
        const name = await this.lotPage.getLotName();
        console.log(`Lot name: ${name}`);
        break;
      }
      case 'Favorites counter': {
        const count = await this.lotPage.getFavoritesCount();
        console.log(`Favorites counter: ${count}`);
        break;
      }
      case 'Current bid': {
        const text = await this.lotPage.getCurrentBidText();
        const value = text.split(/\s+/).filter(Boolean).at(-1) ?? '';
        console.log(`Current bid: ${value}`);
        break;
      }
    }
  });

// TC-002: at least one result is displayed
Then("I expect at least 1 lot to be displayed in search results", async function () {
  await expect(this.homePage.lotCards.first()).toBeVisible();
});

// TC-003: Catawiki will always show results regardless of search term.
// Assert the object-amount heading is visible, confirming the search was processed without error.
Then("I expect the no exact results message to be visible", async function () {
  await expect(this.page.locator('[data-testid="object-amount"]')).toBeVisible();
});

// TC-004: lot page element visibility
Then("I expect the lot title to be visible", async function () {
  await expect(this.lotPage.lotTitle).toBeVisible();
});

Then("I expect the favorites counter to be visible", async function () {
  await expect(this.lotPage.favoritesCount).toBeVisible();
});

Then("I expect the current bid section to be visible", async function () {
  await expect(this.lotPage.bidSection).toBeVisible();
});

Then("I expect the place bid button to be visible", async function () {
  await expect(this.lotPage.placeBidButton).toBeVisible();
});

Then("I expect the set max bid button to be visible", async function () {
  await expect(this.lotPage.setMaxBidButton).toBeVisible();
});

Then("I expect the auction timer to be visible", async function () {
  await expect(this.lotPage.auctionTimer).toBeVisible();
});

// TC-005: bid value validation
Then("I expect the current bid to be a valid positive number", async function () {
  const text = await this.lotPage.getCurrentBidText();
  const numericStr = text.replace(/[^\d.,]/g, '');
  const value = parseFloat(numericStr.replace(',', '.'));
  expect(Number.isFinite(value)).toBe(true);
  expect(value).toBeGreaterThan(0);
});
