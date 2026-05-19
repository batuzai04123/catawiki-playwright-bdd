import { Page } from '@playwright/test';
import { HomePage } from './pages/home-page';
import { MobileHomePage } from './pages/mobile/home-page';
import { LotPage } from './pages/lot-page';
import { MobileLotPage } from './pages/mobile/lot-page';

export class World {
  readonly homePage: HomePage;
  readonly lotPage: LotPage;

  constructor(public page: Page) {
    const isMobile = (page.viewportSize()?.width ?? 1280) < 768;
    this.homePage = isMobile ? new MobileHomePage(page) : new HomePage(page);
    this.lotPage = isMobile ? new MobileLotPage(page) : new LotPage(page);
  }
}
