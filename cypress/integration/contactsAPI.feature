Feature: Contacts API

  I want to tests the endpoints of the contacts API

    Background: Check API is up and log in
        Given The contacts api is up and running

    Scenario Outline: Create a contact
        When I call the create contact endpoint to create "<contact_example>"
        Then I get confirmation of the contact creation
        Examples:
        | contact_example   |
        | contact_1         |

    Scenario Outline: Delete a contact
        Given I call the create contact endpoint to create "<contact_example>"
        When I call the delete endpoint using the created contact information
        Then I get confirmation of the contact deletion
        Examples:
        | contact_example   |
        | contact_2         |

    Scenario Outline: Get All Contacts
        Given I call the create contact endpoint to create "<contact_example>"
        And I call the create contact endpoint to create "<contact_example_2>"
        When I call the all contacts endpoint
        Then I get a list of contacts
        Examples:
        | contact_example   | contact_example_2   |
        | contact_1         | contact_2           |