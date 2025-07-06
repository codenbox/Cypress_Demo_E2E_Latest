Feature: Ecommerce Smoke Test

    This is an end-to-end demo smoke test for cucumber-bdd project.

    Scenario: As an automation developer, i should able to perform e-2-e smoke test
        Given I successfully browse to the application
        When I confirm to find all the 4 products
        And I click on product name is 'MacBook'
        And I validate the product name is 'MacBook' on product details page
        And I validate the price is '$602.00'
        And I ensure 'Description' tab is available
        And I see description has 'Intel Core 2 Duo processor' title
        And I write a review
        And I give 5 star rating and submit review
        And I validate success message for submitting review
        And I add item to cart
        And I click on cart menu & validate
        And I click on checkout link
        And I click on loginPage link
        And Login with invalid credential
        And Login with valid credential
        Then Ensure sum of amount is equal to total amount

    @smoke
    Scenario Outline: As an automation developer, i should able to perform e-2-e smoke test
        Given I successfully browse to the application
        When I confirm to find all the 4 products
        And I click on product name is '<productName>'

        Examples:
            | productName |
            | MacBook     |