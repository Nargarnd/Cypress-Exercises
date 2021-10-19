/**
 * Step Definiton for steps common to multiple features
 */

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { getAuthToken } from "./AuthToken"
  
  Given('The contacts api is up and running', () => {
     cy.request("GET","/health").then((response) => {
       expect(response.status).to.eq(200)
     })
  })

  When('I log into the api with a valid user', () => {
    getAuthToken()
 })