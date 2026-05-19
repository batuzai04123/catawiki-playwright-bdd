@desktop @TC-004
Feature: [Desktop][TC004] Catawiki Lot Page: All key auction elements are displayed

    As a bidder, all essential lot details and bidding controls should be visible on the lot page,
    so that I can make an informed decision before placing a bid.

    Scenario: Lot page displays all required auction elements
        Given I navigate to url "/en"
        When I search for keyword "train"
        And I click magnifying glass icon to perform search
        When I select "1st" lot card from search results
        Then I expect the lot title to be visible
        And I expect the favorites counter to be visible
        And I expect the current bid section to be visible
        And I expect the place bid button to be visible
        And I expect the set max bid button to be visible
        And I expect the auction timer to be visible
