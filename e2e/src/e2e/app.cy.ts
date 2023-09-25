import { getGreeting } from '../support/app.po';

describe('myngapp', () => {
  beforeEach(() => {
    cy.visit('/')

    // Pass object parameter, to override global Eyes configuration in applitools.config.js
    // Set Applitools App Name from describe/suite title
    cy.eyesOpen({
      appName: (Cypress as any).mocha.getRunner().suite.ctx._runnable.parent.title
    });
  });

  it('should display welcome message', () => {
    cy.eyesCheckWindow();
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome myngapp');
    cy.eyesCheckWindow();
  });

  afterEach(() => {
    cy.eyesClose();
  });
});
