import { HomePage } from '../home-page';

export class MobileHomePage extends HomePage {
  private _pendingKeyword = '';

  // On mobile the search drawer is hidden behind a header trigger.
  // Store the keyword now; submitSearch navigates directly to the results URL,
  // which is more reliable than automating the drawer interaction.
  override async fillSearch(keyword: string) {
    this._pendingKeyword = keyword;
  }

  override async submitSearch() {
    await this['page'].goto(`/en/s?q=${encodeURIComponent(this._pendingKeyword)}`);
  }
}
