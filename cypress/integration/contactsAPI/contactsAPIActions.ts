/**
 * Basic functionality of the API
 */

import { getBearer } from "../common/AuthToken";

export function getAllContacts():Cypress.Chainable {
    return cy.request({
        method: 'GET',
        url: "/api/v1/contacts",
        headers: {
          Authorization: getBearer(),
        },
    })
}

export function getContact(contactId:string):Cypress.Chainable {
    return cy.request({
        method: 'GET',
        url: `/api/v1/contacts/${contactId}`,
        headers: {
          Authorization: getBearer(),
        },
    })
}

export function createContact(contact: any):Cypress.Chainable {
    return cy.request({
        method: 'POST',
        url: "/api/v1/contacts",
        headers: {
          Authorization: getBearer(),
        },
        body: contact
      })
}

export function deleteContact(contactId:string, failOnStatus:boolean = true):Cypress.Chainable {
    return cy.request({
        method: 'DELETE',
        url: `/api/v1/contacts/${contactId}`,
        headers: {
          Authorization: getBearer(),
        },
        failOnStatusCode: failOnStatus
    })
}

export function searchContactByName(firstName:string):Cypress.Chainable {
    return cy.request({
        method: 'GET',
        url: "/api/v1/contacts/search",
        headers: {
          Authorization: getBearer(),
        },
        qs: {
            first_name: firstName,
        }
    })
}

export function searchContactByLastName(lastName: string):Cypress.Chainable {
    return cy.request({
        method: 'GET',
        url: "/api/v1/contacts/search",
        headers: {
          Authorization: getBearer(),
        },
        qs: {
            last_name: lastName
        }
    })
}

export function searchContactByNameAndLastName(firstName:string, lastName: string):Cypress.Chainable {
    return cy.request({
        method: 'GET',
        url: "/api/v1/contacts/search",
        headers: {
          Authorization: getBearer(),
        },
        qs: {
            first_name: firstName,
            last_name: lastName
        }
    })
}

export function updateContact(contactId:string, modifiedContact: any):Cypress.Chainable {
    return cy.request({
        method: 'PATCH',
        url: `/api/v1/contacts/${contactId}`,
        headers: {
          Authorization: getBearer(),
        },
        body: modifiedContact
    })
}
