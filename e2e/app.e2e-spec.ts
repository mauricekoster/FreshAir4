import { FreshAir4Page } from './app.po';

describe('fresh-air4 App', () => {
  let page: FreshAir4Page;

  beforeEach(() => {
    page = new FreshAir4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
