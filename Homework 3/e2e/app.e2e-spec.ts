import { AngularPatientsPage } from './app.po';

describe('angular-patients App', () => {
  let page: AngularPatientsPage;

  beforeEach(() => {
    page = new AngularPatientsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
