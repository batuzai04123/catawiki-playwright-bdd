@TC-002
Feature: [TC002] Catawiki Search: Multiple keyword searches return results

    As a user, I want to verify that common search terms consistently return lots,
    so that the search feature is reliable across different categories.

    Scenario Outline: Searching for "<keyword>" returns at least 1 lot
        Given I navigate to url "/en"
        When I search for keyword "<keyword>"
        And I click magnifying glass icon to perform search
        Then I expect url to contain "catawiki.com/en/s?q=<keyword>"
        And I expect at least 1 lot to be displayed in search results

        Examples:
            | keyword |
            | train   |
            | watch   |
            | stamp   |
