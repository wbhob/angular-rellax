import { AngularRellaxPage } from './app.po';

describe('angular-rellax App', function() {
  let page: AngularRellaxPage;

  beforeEach(() => {
    page = new AngularRellaxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
