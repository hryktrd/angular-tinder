import { AngularTinderPage } from './app.po';

describe('angular-tinder App', () => {
  let page: AngularTinderPage;

  beforeEach(() => {
    page = new AngularTinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
