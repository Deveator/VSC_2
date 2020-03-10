/// <reference types="Cypress" />

describe('My Second AndT Test', function() {

    it('Does not do much!', function() {

        cy.visit('https://afisha.tut.by/theatre/');
      //  cy.get('#bcb01').check().should('be.checked').and('have.value','ffevfev')
        cy.get('#bcb01').uncheck().should('not.be.checked')
        cy.get('select').click()


    })
})