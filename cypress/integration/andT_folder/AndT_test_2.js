/// <reference types="Cypress" />

describe('My Second AndT Test', function() {

    it('Does not do much!', function() {

    cy.visit('https://test-5-16-32-2.ladesk.com/agent/index.php#login');
    cy.get("input[name='username']").type("andrejtimo6enko@gmail.com");
    cy.get("input[name='password']").type("123456z+");

   // cy.get(".CheckBox").attr('aria-checked').should('have.value','true');
    



 // cy.get('.CheckBox').then(function(logVal){
  //  cy.text(logVal.attr('aria-checked'))
//});



    cy.contains('Log In').click();
    cy.get('.gwt-Label.LoggedUserName').should('have.text', 'aTim');

    cy.get('.gwt-Label.UserName').should('have.length', '9');

   

  //  cy.get('.gwt-Label.LoggedUserName').then(function(logVal){
  //      cy.log(logVal.attr('class'))
 //   });


    })
})

