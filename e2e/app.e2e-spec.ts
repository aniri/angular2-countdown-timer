import { Angular2CountdownTimerPage } from './app.po';

describe('angular2-countdown-timer App', () => {
  let page: Angular2CountdownTimerPage;

  beforeEach(() => {
    page = new Angular2CountdownTimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
