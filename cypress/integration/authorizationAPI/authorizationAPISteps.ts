/**
 * Step Definiton for testing the Auth API
 */

import { When, Then } from "cypress-cucumber-preprocessor/steps"
import { getAccessToken } from "../common/AuthToken"

 When('I log into the api with a non valid user', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'POST',
      url: "/auth/login",
      body: {
        username: 'invalid',
        password:'invalid',
      },
    }).as("AuthResponse")
 })

 Then('The API responds with an access token', () => {
    assert.notEqual(getAccessToken, null)
 })

 Then('The API responds with a validation error', () => {
    cy.get("@AuthResponse").should('have.a.property', 'status', 422)
 })
 

