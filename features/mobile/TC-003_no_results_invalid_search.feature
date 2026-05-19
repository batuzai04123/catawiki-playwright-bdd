@mobile @TC-003
Feature: [Mobile][TC003] Catawiki Search: Unrecognized keyword still returns a results page

    As a user, when I search for a term that has no matching lots,
    I expect Catawiki to still handle the query gracefully and display a results page.
    On mobile, the page shows related objects without the desktop "No exact results" message.

    Scenario: Searching for a nonsense keyword shows a results page with related objects
        Given I navigate to url "/en"
        When I search for keyword "xyzqwerty987654321nonsense_asdfdsaf213213123"
        And I click magnifying glass icon to perform search
        Then I expect url to contain "catawiki.com/en/s?q=xyzqwerty987654321nonsense"
        And I expect the no exact results message to be visible
