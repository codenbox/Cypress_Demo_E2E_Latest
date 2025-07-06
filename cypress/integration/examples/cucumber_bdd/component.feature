Feature: Component Test for demo.codenbox.com

    This is a common component test of navigation bar across all the pages.
    @smoke
    Scenario: As an automation developer, i should able to perform component test
        Given I browser to the application
        When I click on search box, type 'MacBook' and hit enter
        And I validate the search results contain text 'MacBook'
        And I click on My Account tab
        And I click on Login menu option
        And I click on Logo image
        Then Ensure back to home page with title 'Your Store'

