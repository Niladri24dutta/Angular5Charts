import { AppPage } from './app.po';

describe('angularcharts App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular 5 with bootstrap 3.x and Chartjs');
  });
});
