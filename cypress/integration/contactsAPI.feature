Feature: Contacts API

  I want to tests the endpoints of the contacts API

    Background: Check API is up and log in
        Given The contacts api is up and running

    Scenario Outline: Create a contact
        When I call the create contact endpoint to create "<created_contact>"
        Then I get confirmation of the contact creation
        Examples:
        | created_contact   |
        | contact_1         |

    Scenario Outline: Delete a contact
        Given I call the create contact endpoint to create "<created_contact>"
        When I call the delete endpoint using the created contact information
        Then I get confirmation of the contact deletion
        Examples:
        | created_contact   |
        | contact_2         |

    Scenario Outline: Get all contacts
        Given I call the create contact endpoint to create "<created_contact>"
        And I call the create contact endpoint to create "<created_contact_2>"
        When I call the all contacts endpoint
        Then I get a list of "2" contacts
        Examples:
        | created_contact   | created_contact_2   |
        | contact_1         | contact_2           |

    Scenario Outline: Get a specific contact
        Given I call the create contact endpoint to create "<created_contact>"
        When I call the get contact endpoint for the created contact
        Then I get the desired contact
        Examples:
        | created_contact   |
        | contact_1         |

    Scenario Outline: Update a contact
        Given I call the create contact endpoint to create "<created_contact>"
        When I call the update contact endpoint for the created contact with data like "<modified_contact>"
        Then I get confirmation of the contact modification
        Examples:
        | created_contact   | modified_contact   |
        | contact_1         | contact_1_modified |

     Scenario Outline: Search a contact by name
        Given I call the create contact endpoint to create "<created_contact>"
        And I call the create contact endpoint to create "<created_contact_2>"
        When I call the search contact endpoint for the created contact filtering by name "test_name"
        Then The search finds the unique desired contact "<created_contact>"
        Examples:
        | created_contact   | created_contact_2   |
        | contact_1         | contact_2           |

    Scenario Outline: Search a contact by lastname
        Given I call the create contact endpoint to create "<created_contact>"
        And I call the create contact endpoint to create "<created_contact_2>"
        When I call the search contact endpoint for the created contact filtering by lastname "test_lastname"
        Then The search finds the unique desired contact "<created_contact>"
        Examples:
        | created_contact   | created_contact_2   |
        | contact_1         | contact_2           |