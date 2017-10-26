import { AngularWikiSearchPage } from './app.po';

describe('angular-wiki-search App', () => {
  let page: AngularWikiSearchPage;

  beforeEach(() => {
    page = new AngularWikiSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
