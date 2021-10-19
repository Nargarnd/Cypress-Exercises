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