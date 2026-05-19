// Generated from: features/TC-001_retrieve_2nd_lot_catawiki.feature
import { test } from "../../src/fixture.ts";

test.describe('[TC001] Catawiki Search: Retrieve 2nd lot from search results', () => {

  test('Search for "train" and retrieve 2nd lot details', { tag: ['@TC-001'] }, async ({ Given, When, Then, And }) => { 
    await Given('I navigate to url "https://www.catawiki.com/en"'); 
    await When('I search for keyword "train"'); 
    await And('I click magnifying glass icon to perform search'); 
    await Then('I expect url to contain "www.catawiki.com/en/s?q=train"'); 
    await When('I select "2nd" lot card from search results'); 
    await Then('I display the Lot name from the lot card to console'); 
    await And('I display the Favorites counter from the lot card to console'); 
    await And('I display the Current bid from the lot card to console'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/TC-001_retrieve_2nd_lot_catawiki.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  $world: [({ world }, use) => use(world), { scope: 'test', box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@TC-001"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to url \"https://www.catawiki.com/en\"","stepMatchArguments":[{"group":{"start":18,"value":"\"https://www.catawiki.com/en\"","children":[{"start":19,"value":"https://www.catawiki.com/en","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I search for keyword \"train\"","stepMatchArguments":[{"group":{"start":21,"value":"\"train\"","children":[{"start":22,"value":"train","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click magnifying glass icon to perform search","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I expect url to contain \"www.catawiki.com/en/s?q=train\"","stepMatchArguments":[{"group":{"start":24,"value":"\"www.catawiki.com/en/s?q=train\"","children":[{"start":25,"value":"www.catawiki.com/en/s?q=train","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I select \"2nd\" lot card from search results","stepMatchArguments":[{"group":{"start":10,"value":"2","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":12,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I display the Lot name from the lot card to console","stepMatchArguments":[{"group":{"start":14,"value":"Lot name","children":[]}}]},{"pwStepLine":13,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And I display the Favorites counter from the lot card to console","stepMatchArguments":[{"group":{"start":14,"value":"Favorites counter","children":[]}}]},{"pwStepLine":14,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And I display the Current bid from the lot card to console","stepMatchArguments":[{"group":{"start":14,"value":"Current bid","children":[]}}]}]},
]; // bdd-data-end