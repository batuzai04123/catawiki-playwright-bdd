import { Then } from "@/fixture";
import { expect } from "@playwright/test";
import _ from "lodash";

Then("I expect url to contain {string}", async function (urlPart: string) {
    const page = this.page;

    // Escape first
    const escapedUrl = _.escapeRegExp(urlPart);
    const urlPattern = new RegExp(escapedUrl);

    await expect(page).toHaveURL(urlPattern);
});

Then(/^I display the (Lot name|Favorites counter|Current bid) from the lot card to console$/,
    async function (element: 'Lot name' | 'Favorites counter' | 'Current bid') {
        const page = this.page;

        const mainLotElement = page.locator(`css=[data-sentry-component="DesktopLotTitle"]`);

        switch (element) {
            case 'Lot name': {
                const lotNameLocator = mainLotElement.locator(`css=[class*='LotTitle_title']`);
                const lotName = await lotNameLocator.textContent();
                console.log(`Lot name: ${lotName}`);
                break;
            }
            case 'Favorites counter': {
                const favoritesCounterLocator = mainLotElement.locator(`css=[class*='FavoriteChip_count']`);
                const favoritesCounter = await favoritesCounterLocator.textContent();
                console.log(`Favorites counter: ${favoritesCounter}`);
                break;
            }
            case 'Current bid': {
                const currentBidLocator = page.locator(`css=[data-testid="lot-bid-status-section"] [data-sentry-component="Amount"]`);

                // The output is something like '€ 99', we need to trim it to get just the number
                const currentBid = await currentBidLocator.textContent();
                const trimmedBid = currentBid?.trim();
                const bidValue = trimmedBid?.split(' ')[1]; // Assuming the format is "€ 99"

                console.log(`Current bid: ${bidValue}`);
                break;
            }
        }
    });