import { AngularSkeletonAppPage } from './app.po';

describe('angular-skeleton-app App', () => {
  let page: AngularSkeletonAppPage;

  beforeEach(() => {
    page = new AngularSkeletonAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
