
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Launch the website', () => {
  cy.visit('https://www.britishgas.co.uk');
});

Then('Validate the title', () => {
  cy.title().should('eq', 'Gas and electricity, boilers and energy efficiency - British Gas')
});
