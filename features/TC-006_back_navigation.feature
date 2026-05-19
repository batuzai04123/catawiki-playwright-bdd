@TC-006
Feature: [TC006] Catawiki Navigation: Returning to search results from a lot page

    As a user, after viewing a lot page I want to be able to navigate back to the search results, so that I can continue browsing other lots.

    Scenario: Navigate back to search results from lot page
        Given I navigate to url "/en"
        When I search for keyword "train"
        And I click magnifying glass icon to perform search
        Then I expect url to contain "catawiki.com/en/s?q=train"
        When I select "1st" lot card from search results
        And I navigate back to the previous page
        Then I expect url to contain "catawiki.com/en/s?q=train"
