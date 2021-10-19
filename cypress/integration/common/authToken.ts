let token: AuthToken

class AuthToken {
  access_token: string
  token_type: string

  constructor(access_token: string, token_type: string) {
    this.access_token = access_token
    this.token_type = token_type
  }
}

export function getAuthToken(): Cypress.Chainable<AuthToken> {
    return cy.request({
        method: 'POST',
        url: "/auth/login",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
        body: {
          username: Cypress.env('api_username'),
          password: Cypress.env('api_password'),
        },
      })
    .then((response) => {
      return response.body
    })
    .then((result: string) => {
      token = <AuthToken>(<unknown>result)
    })
}

export function getAccessToken(): string {
    return token.access_token
}

export function getBearer(): string {
  return `bearer ${token.access_token}`
}

