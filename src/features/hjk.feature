Feature: Test

  Scenario: Navigate to correct page and click on "Add New User" button

    Given I am logged in
    Then I should click staff icon on the left
    And I click on 'Add Employees' button
    And I close the browser

  Scenario: Navigate to correct page and click on "Check In/Check Out" button

    Given I am logged in
    Then I should click clock icon on the left
    And I click on 'CheckIn/CheckOut' button
    And I close the browser
