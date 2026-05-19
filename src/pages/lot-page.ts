import { Page } from '@playwright/test';

export class LotPage {
  constructor(protected page: Page) {}

  get lotTitleSection() {
    return this.page.locator('[data-sentry-component="DesktopLotTitle"]');
  }

  get lotTitle() {
    return this.lotTitleSection.locator('h1');
  }

  get favoritesCount() {
    return this.page.locator('[data-sentry-component="LotDetailsFavoriteButton"] [class*="FavoriteChip_count"]');
  }

  get bidSection() {
    return this.page.locator('[data-testid="lot-bid-status-section"]');
  }

  get currentBidAmount() {
    return this.bidSection.locator('[data-sentry-component="Amount"]');
  }

  get placeBidButton() {
    return this.page.getByRole('button', { name: 'Place bid' }).first();
  }

  get setMaxBidButton() {
    return this.page.getByRole('button', { name: 'Set max bid' }).first();
  }

  get auctionTimer() {
    return this.page.locator('[data-testid="timer-countdown"]');
  }

  async getLotName(): Promise<string> {
    return (await this.lotTitle.textContent()) ?? '';
  }

  async getFavoritesCount(): Promise<string> {
    return (await this.favoritesCount.textContent()) ?? '';
  }

  async getCurrentBidText(): Promise<string> {
    return (await this.currentBidAmount.textContent())?.trim() ?? '';
  }
}
