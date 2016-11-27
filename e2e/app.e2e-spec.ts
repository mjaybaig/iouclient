import { RedditclonePage } from './app.po';

describe('redditclone App', function() {
  let page: RedditclonePage;

  beforeEach(() => {
    page = new RedditclonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
