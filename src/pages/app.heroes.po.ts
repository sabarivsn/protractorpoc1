import { DashBoardPage } from "./app.po";
import { browser, by, element, promise } from 'protractor';

export class HeroesPage extends DashBoardPage {
    
    async navigateTo() {
        return browser.get(browser.baseUrl+"hereos");
      }

    async getSubTitleText() {
        return element(by.xpath("//app-heroes/h2")).getText();
    }

    async getHeroes() {
        return element.all(by.xpath("//app-heroes/ul/li"));
    }

    async getHeroesCount() {
        return element.all(by.xpath("//app-heroes/ul/li")).count();
    }
}