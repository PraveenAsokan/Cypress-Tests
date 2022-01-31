
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Launch the website', () => {
  cy.visit('https://www.britishgas.co.uk');
});

Then('Validate the title', () => {
  cy.title().should('eq', 'Gas and electricity, boilers and energy efficiency - British Gas')
});
