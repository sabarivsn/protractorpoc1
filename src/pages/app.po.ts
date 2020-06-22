import { browser, by, element } from 'protractor';
import { resolve } from 'path';

export class DashBoardPage {
  async navigateTo() {
    return browser.get(browser.baseUrl);
  }

  async getTitleText() {
    return element(by.xpath("//app-root/app-banner/h1")).getText();
  }

  async getSubTitleText() {
    return element(by.xpath("//app-dashboard/h2")).getText();
  }

  async goToAction<T extends DashBoardPage>(type: new() => T): Promise<T> {
    let page = new type();
    switch(page.constructor.name) {
      case "DashBoardPage":
        await element(by.xpath("//nav/a[text()='Dashboard']")).click(); 
        break;
      case "HeroesPage":
        await element(by.xpath("//nav/a[text()='Heroes']")).click();
        break; 
      case "AboutPage":
        await element(by.xpath("//nav/a[text()='About']")).click();
        break;
    }
    return new Promise(()=> {return page});
  }
}