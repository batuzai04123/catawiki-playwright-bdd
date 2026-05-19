import { Page } from '@playwright/test';
import { HomePage } from './pages/home-page';
import { LotPage } from './pages/lot-page';

export class World {
  readonly homePage: HomePage;
  readonly lotPage: LotPage;

  constructor(public page: Page) {
    this.homePage = new HomePage(page);
    this.lotPage = new LotPage(page);
  }
}
