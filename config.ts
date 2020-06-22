import { Config, browser } from "protractor";

export let config: Config = {
    directConnect: true,
    allScriptsTimeout: 11000,
    specs: ['../src/features/**/*.feature'],
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    },
    baseUrl: 'http://localhost:4200/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['./src/steps/**/*.steps.js'],
    },
    restartBrowserBetweenTests:true
}