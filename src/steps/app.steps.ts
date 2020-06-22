import { Before, Given, Then } from 'cucumber';
import { expect } from 'chai';

import { DashBoardPage } from '../pages/app.po';
import { HeroesPage } from '../pages/app.heroes.po';
import { AboutPage } from '../pages/app.about.po';

let page: DashBoardPage;
let heroesPage: HeroesPage;
let aboutPage: AboutPage;

Before(() => {
  page = new DashBoardPage();
});

Given(/^I am on the DashBoardPage$/, async () => {
  await page.navigateTo();
});

Given(/^I go to HeroesPage$/, async () => {
  page = heroesPage = await page.goToAction(HeroesPage);
});

Given(/^I go to AboutPage$/, async () => {
  page = aboutPage = await page.goToAction(AboutPage);
});

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('Test Tour of Heroes');
});

Then(/^I should see the Quote$/, async () => {
  expect(await aboutPage.getQuote()).to.not.empty;
});

Then("I should see {int} heroes listed", async (num: number) => {
  expect(await heroesPage.getHeroesCount()).to.equal(num);
});

Then("I should see the sub title {string}", async (arg1: string) => {
  expect(await page.getSubTitleText()).to.equal(arg1);
});