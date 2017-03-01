import { browser, element, by } from 'protractor';

export class OgClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('xj-root h1')).getText();
  }
}
