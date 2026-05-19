import { Page } from '@playwright/test';

export class HomePage {
  constructor(protected page: Page) { }

  get searchInput() {
    return this.page.locator('[data-testid="search-field"]').first();
  }

  get searchButton() {
    return this.page.locator('button[aria-label="Search"]:visible');
  }

  get lotList() {
    return this.page.locator('[data-sentry-component="LotList"]');
  }

  get lotCards() {
    return this.lotList.locator('article > a');
  }

  async fillSearch(keyword: string) {
    await this.searchInput.fill(keyword);
  }

  async submitSearch() {
    await this.searchButton.click();
  }

  async selectLot(index: number) {
    await this.lotCards.nth(index).click();
  }
}
