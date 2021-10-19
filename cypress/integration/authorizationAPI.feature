Feature: Authorization API

  I want to tests the process log in and out of the API

  Background: Check API is up and running
    Given The contacts api is up and running

  Scenario: Check the basic authorization endpoint with valid user
    When I log into the api with a valid user
    Then The API responds with an access token

  Scenario: Check the basic authorization endpoint with non valid user 
    When I log into the api with a non valid user
    Then The API responds with a validation error