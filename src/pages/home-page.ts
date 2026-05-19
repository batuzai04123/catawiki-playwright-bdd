import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) { }

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

  async selectLot(index: number) {
    await this.lotCards.nth(index).click();
  }
}
