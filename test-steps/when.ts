import { When } from "@/fixture";

When("I click magnifying glass icon to perform search", async function () {
  await this.homePage.searchButton.click();
});

When("I search for keyword {string}", async function (keyword: string) {
  await this.homePage.searchInput.fill(keyword);
});

When(/^I select "(\d+)(?:st|nd|rd|th)?" lot card from search results$/,
  async function (lotSelection: string) {
    const lotIndex = parseInt(lotSelection, 10) - 1;
    await this.homePage.selectLot(lotIndex);
  });

When("I navigate back to the previous page", async function () {
  await this.page.goBack();
});
