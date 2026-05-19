@TC-003
Feature: [TC003] Catawiki Search: Unrecognized keyword still returns a results page

    As a user, when I search for a term that has no matching lots,
    I expect Catawiki to handle the query gracefully and show a results page with related objects.

    Scenario: Searching for a nonsense keyword shows a results page with related objects
        Given I navigate to url "/en"
        When I search for keyword "xyzqwerty987654321nonsense"
        And I click magnifying glass icon to perform search
        Then I expect url to contain "catawiki.com/en/s?q=xyzqwerty987654321nonsense"
        And I expect the no exact results message to be visible
