import { getGreeting } from '../support/app.po';

describe('check-in', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to check-in!');
  });
});
