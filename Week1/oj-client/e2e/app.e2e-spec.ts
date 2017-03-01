import { OgClientPage } from './app.po';

describe('og-client App', () => {
  let page: OgClientPage;

  beforeEach(() => {
    page = new OgClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('xj works!');
  });
});
