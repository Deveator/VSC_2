/// <reference types="Cypress" />
import LoginPage from '../pageObject/LoginPage'
describe('My Second AndT Test', function () {

    before(function () {
        cy.fixture("example").then(function (data) {
            this.data = data;
        })
    })

    it('Does not do much!', function () {

        const loginPage = new LoginPage()

        cy.visit(Cypress.env('loginUrl'));

        loginPage.getUsernameString().type(this.data.login);
        loginPage.getPasswordString().type(this.data.password);

        // cy.get(".CheckBox").should('have.attr','aria-checked','true');

        cy.get(".CheckBox").then(function (el) {

            const aria = el.prop("aria-checked");
            cy.log(aria);
        })


        cy.contains('Log In').click();

    })
})