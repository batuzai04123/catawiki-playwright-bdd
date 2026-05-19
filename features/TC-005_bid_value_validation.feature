@TC-005
Feature: [TC005] Catawiki Lot Page: Current bid is a valid positive number

    As a user, the current bid amount displayed on a lot page should always be a valid positive number, ensuring the auction data is correctly rendered.

    Scenario: Current bid value is a valid positive number
        Given I navigate to url "/en"
        When I search for keyword "train"
        And I click magnifying glass icon to perform search
        When I select "1st" lot card from search results
        Then I expect the current bid to be a valid positive number
