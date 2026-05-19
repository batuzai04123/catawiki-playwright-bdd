import { LotPage } from '../lot-page';

export class MobileLotPage extends LotPage {
  get lotTitleSection() {
    return this.page.locator('[data-sentry-component="MobileLotTitle"]');
  }

  get lotTitle() {
    return this.lotTitleSection.locator('h1');
  }

  // On mobile the bid section lives inside StickyFooter, not lot-bid-status-section
  get bidSection() {
    return this.page.locator('[data-sentry-component="StickyFooter"]');
  }

  // Amount component is reused on mobile but not scoped under lot-bid-status-section
  get currentBidAmount() {
    return this.page.locator('[data-sentry-component="Amount"]');
  }
}
