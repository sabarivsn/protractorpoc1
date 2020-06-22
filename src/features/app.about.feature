Feature: Verify About Page

    Scenario: AboutPage title and subtile
        Given I am on the DashBoardPage
        When I go to AboutPage
        Then I should see the title
        And I should see the sub title "About"

    Scenario: Quotes
        Given I am on the DashBoardPage
        When I go to AboutPage
        Then I should see the Quote