import { When } from "@/fixture";

When("I click magnifying glass icon to perform search", async function () {
    const page = this.page;

    const magnifyingGlassBtn = page.locator(`css=button[aria-label="Search"]:visible`);
    await magnifyingGlassBtn.click();
});

When("I search for keyword {string}", async function (keyword: string) {
    const page = this.page;

    // const searchField = page.getByPlaceholder("Search for brand, model, artist...");
    const searchField = page.locator(`css=#field_r_2_`);
    await searchField.fill(keyword);
});

When(/^I select "(\d+)(?:st|nd|3rd|th)?" lot card from search results$/,
    async function (lotSelection: string) {
        const page = this.page;

        const lotCardList = page.locator(`css=[data-sentry-component="LotList"]`);

        const lotCard = lotCardList.locator(`css=article > a`);

        const lotIndex = parseInt(lotSelection, 10) - 1;

        await lotCard.nth(lotIndex).click();
    });