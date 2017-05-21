import { WorldoverviewFrontEndPage } from './app.po';

describe('worldoverview-front-end App', () => {
  let page: WorldoverviewFrontEndPage;

  beforeEach(() => {
    page = new WorldoverviewFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
