import { AngularAnimalKingdomPage } from './app.po';

describe('angular-animal-kingdom App', () => {
  let page: AngularAnimalKingdomPage;

  beforeEach(() => {
    page = new AngularAnimalKingdomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
