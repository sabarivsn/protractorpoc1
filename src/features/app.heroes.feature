Feature: Verify Heroes Page

    Scenario: HeroesPage title & sub title
        Given I am on the DashBoardPage
        When I go to HeroesPage
        Then I should see the title
        And I should see the sub title "My Heroes"

    Scenario: HeroesPage heroes counts
        Given I am on the DashBoardPage
        When I go to HeroesPage
        Then I should see 10 heroes listed