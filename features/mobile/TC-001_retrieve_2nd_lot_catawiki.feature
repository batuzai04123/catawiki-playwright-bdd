@mobile @TC-001
Feature: [Mobile][TC001] Catawiki Search: Retrieve 2nd lot from search results

    As a user, I want to search for keyword "train" on Catawiki and retrieve the 2nd lot from the search results, so that I can view its details.

    Scenario: Search for "train" and retrieve 2nd lot details
        Given I navigate to url "/en"
        When I search for keyword "train"
        And I click magnifying glass icon to perform search
        Then I expect url to contain "www.catawiki.com/en/s?q=train"
        When I select "2nd" lot card from search results
        Then I display the Lot name from the lot card to console
        And I display the Favorites counter from the lot card to console
        And I display the Current bid from the lot card to console



