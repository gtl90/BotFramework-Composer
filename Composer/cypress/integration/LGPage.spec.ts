// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

context('LG Page', () => {
  beforeEach(() => {
    cy.visit('/home');
    cy.createBot('TodoSample');
  });

  it('can open language generation page', () => {
    cy.findByTestId('LeftNav-CommandBarButtonBot Responses').click();
    // left nav tree
    cy.contains('TodoSample');

    cy.findByTestId('showcode').as('switchButton');

    // by default is table view
    cy.findByTestId('LGPage').findByTestId('table-view').should('exist');
    // goto edit-mode
    cy.get('@switchButton').click();
    cy.findByTestId('LGPage').get('.monaco-editor').should('exist');

    // back to table view
    cy.get('@switchButton').click();

    // click the logo to clear any stray navigation
    cy.findByAltText('Composer Logo').click();

    // nav to Main dialog
    cy.findByTestId('ProjectTree').within(() => {
      cy.findAllByText('__TestTodoSample').last().click();
    });
  });
});
