Feature: Go to the Pages & Verify the title

  Scenario: DashBoardPage
    Given I am on the DashBoardPage
    Then I should see the title
    And I should see the sub title "Top 4 Heroes"