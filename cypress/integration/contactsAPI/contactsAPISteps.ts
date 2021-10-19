/**
 * Step Definiton for testing the Auth API
 */

import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { getAuthToken, getBearer } from "../common/AuthToken"
import { createContact, deleteContact, getAllContacts, getContact, updateContact } from "./contactsAPIActions";

// This will get called before each scenario
Before(() => {
    //Get the AuthToken
    getAuthToken().then(() => {
      //Clean all existing users before each test
      getAllContacts().then((allContactsRes) => {
        const allContacts = <Cypress.Response<any>> <unknown> allContactsRes
        const contactsArray = <Array<any>> <unknown> allContacts.body
        console.log(allContacts)
        console.log(contactsArray)
        contactsArray.forEach(contact => {
            console.log(contact)
            deleteContact(contact.id, false)
        });
      })
    })
});

Given
When('I call the create contact endpoint to create {string}', (fixtureName:string) => {
  cy.fixture(fixtureName).as("creationData").then((contactData) => {
    createContact(contactData).as("ContactCreationResponse")
  })
})

When('I call the delete endpoint using the created contact information', () => {
  cy.get("@ContactCreationResponse").then((response) => {
    const res = <Cypress.Response<any>> <unknown> response
    console.log(res)
    deleteContact(res.body.id).as("ContactDeletionResponse")
  })
})

When('I call the get contact endpoint for the created contact', () => {
  cy.get("@ContactCreationResponse").then((response) => {
    const res = <Cypress.Response<any>> <unknown> response
    console.log(res)
    getContact(res.body.id).as("ContactGetResponse")
  })
})

 When('I call the all contacts endpoint', () => {
    getAllContacts().as("GetAllContactsResponse")
 })

 When('I call the update contact endpoint for the created contact with data like {string}', (fixtureName:string) => {
  cy.get("@ContactCreationResponse").then((response) => {
    const res = <Cypress.Response<any>> <unknown> response
    cy.fixture(fixtureName).as("updateData").then((contactData) => {
      updateContact(res.body.id, contactData).as("ContactUpdateResponse")
    })
  })
})

 Then('I get confirmation of the contact creation', () => {
  cy.get("@ContactCreationResponse").then((response) => {
     const res = <Cypress.Response<any>> <unknown> response
     cy.get("@creationData").then((data) => {
        const expectedData = <any> <unknown> data
        expect(res.body.firstName).to.equal(expectedData.firstName)
        expect(res.body.lastName).to.equal(expectedData.lastName)
        expect(res.body.email).to.equal(expectedData.email)
        expect(res.body.phone).to.equal(expectedData.phone)
        expect(res.body.mobile).to.equal(expectedData.mobile)
     })
  })
})

Then('I get confirmation of the contact deletion', () => {
  cy.get("@ContactDeletionResponse").then((response) => {
     const res = <Cypress.Response<any>> <unknown> response
     console.log(res)
  })
})

Then('I get confirmation of the contact modification', () => {
  cy.get("@ContactUpdateResponse").then((response) => {
     const res = <Cypress.Response<any>> <unknown> response
     cy.get("@updateData").then((data) => {
        const expectedData = <any> <unknown> data
        expect(res.body.firstName).to.equal(expectedData.firstName)
        expect(res.body.lastName).to.equal(expectedData.lastName)
        expect(res.body.email).to.equal(expectedData.email)
        expect(res.body.phone).to.equal(expectedData.phone)
        expect(res.body.mobile).to.equal(expectedData.mobile)
     })
  })
})

Then('I get a list of contacts', () => {
   cy.get("@GetAllContactsResponse").then((response) => {
      const res = <Cypress.Response<any>> <unknown> response
      const contactsArray = <Array<any>> <unknown> res.body
      expect(contactsArray.length).to.equal(2)
   })
})

Then('I get the desired contact', () => {
  cy.get("@ContactGetResponse").then((response) => {
    const res = <Cypress.Response<any>> <unknown> response
    cy.get("@creationData").then((data) => {
       const expectedData = <any> <unknown> data
       expect(res.body.firstName).to.equal(expectedData.firstName)
       expect(res.body.lastName).to.equal(expectedData.lastName)
       expect(res.body.email).to.equal(expectedData.email)
       expect(res.body.phone).to.equal(expectedData.phone)
       expect(res.body.mobile).to.equal(expectedData.mobile)
    })
  })
})