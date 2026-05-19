import { HomePage } from '../home-page';

export class MobileHomePage extends HomePage {
  private _pendingKeyword = '';

  override async fillSearch(keyword: string) {
    this._pendingKeyword = keyword;
  }

  override async submitSearch() {
    await this['page'].goto(`/en/s?q=${encodeURIComponent(this._pendingKeyword)}`);
  }
}
