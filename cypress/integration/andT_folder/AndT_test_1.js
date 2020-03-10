/// <reference types="Cypress" />
describe('My First AndT Test', function() {
    it('Does not do much!', function() {
        // test step
        cy.visit("https://test-5-16-32-2.ladesk.com/agent/index.php#login");
        cy.get("input[name='username']").type("andrejtimo6enko@gmail.com");
        cy.get("input[name='password']").type("123456z+");
        cy.get(".LoginButton").click();

        cy.get('.gwt-Label.LoggedUserName').should('have.text', 'aTim');


        cy.get('.gwt-Label.LoggedUserName').then(function(userName){
          cy.log(userName.text());
        })

      //  cy.get(".IconPanel:visible").should("have.length",9);

       // cy.get("div[class*='menuItem Knowledgebase']").click();

        /*

        cy.get(".EntriesPanel").find(".IconPanel").each(($el,index,$list)=>  {

          const textVal = $el.find("gwt-Label CaptionLabel").text()

          if(textVal.includes("Configuration")){
            $el.find(".IconPanel").click()
          }

        })
*/

    //    cy.get(".PresetLabel").contains("Custom filter");
    //    cy.get(".PresetLabel").get()

    //  expect(true).to.equal(true)
    })
    it('Does  do much!', function() {
        // test step
      expect(true).to.equal(true)
    })
  })