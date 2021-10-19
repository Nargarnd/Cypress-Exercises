# Cypress-Exercises

A project to test all the endpoints of a single API with OAuth authentication

## 🛠️ Project Features

These are the most relevant technologies that this project includes, all of them are configured to make usage easier and coding more powerfull.

- **TypeScript**: Code written in TypeScript.
- **Cypress**: Test Automation framework for frontend.
- **Cucumber-Preprocessor**: Aditional tool to write and process Cucumber based test cases.

## 🏃 Getting Started

These instructions will get you a copy of the project up and running on your local machine.

- Install the required node modules executing: npm install
- Create an environment variable in your local machine named "cypress_api_password" with a valid value for the OAuth authentication (See the exercise definition PDF file)
- Restart Visual Studio Code (or your IDE) to ensure the environment variable is detected
- Enter on the Cypress test interface using: npm run open

## 🗃️ Project structure
The proyect file structure is designed following the basic principles of cypress and cucumber-preprocessor.

### Project Configuration

All the startup configuration is in [cypress/plugins/index.js](cypress/plugins/index.js)

Project custom scripts and dependencies can be found in the [package.json](package.json)

### MockData

The mock data used for testing is organized in .json files inside [cypress/fixtures](cypress/fixtures)

### Tests definitions

The folder [cypress/integration](cypress/integration) contains all the test features and diferent folders for all the step implementations:

- [cypress/integration/common](cypress/integration/common): This folder contains step definitions that are common to multiple scenarios or features.

- [cypress/integration/authorizationAPI](cypress/integration/authorizationAPI): This folder contains step definitions that are unique to the OAuth authorization scenarios.

- [cypress/integration/contactsAPI](cypress/integration/contactsAPI): This folder contains step definitions that are unique to the basic API endpoints scenarios.