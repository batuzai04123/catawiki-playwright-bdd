import { LotPage } from '../lot-page';

export class MobileLotPage extends LotPage {
  get lotTitleSection() {
    return this.page.locator('[data-sentry-component="MobileLotTitle"]');
  }

  get lotTitle() {
    return this.lotTitleSection.locator('h1');
  }

  get bidSection() {
    return this.page.locator('[data-sentry-component="StickyFooter"]');
  }

  get currentBidAmount() {
    return this.page.locator('[data-sentry-component="Amount"]');
  }
}
