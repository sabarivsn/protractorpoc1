import { DashBoardPage } from "./app.po";
import { browser, by, element } from 'protractor';
import { protractor } from "protractor/built/ptor";

export class AboutPage extends DashBoardPage {
    
    async navigateTo() {
        return browser.get(browser.baseUrl+"about") as Promise<any>;
      }

    async getSubTitleText() {
        return element(by.xpath("//ng-component/h2")).getText();
    }

    async getQuote() {
        let quote = element(by.xpath("//twain-quote/p/i"));
        browser.wait(protractor.ExpectedConditions.presenceOf(quote), 5000);
        return quote.getText();
    }
}