/// <reference types="Cypress"/>

// Hold group of tests
describe('My First Test', () => {

    it('Visit TechGlobal training app home page', () => {

        cy.visit('https://www.techglobal-training.com/')
        cy.reload() // command to refresh your currebt url
        cy.visit('https://www.techglobal-training.com/frontend')
        // Navigate back on a web page
        //cy.go('back')
        cy.go(-1)

        // Navigate forward on the web page
         //cy.go('forward')
         cy.go(1)

         cy.go(-1)


         // Title 1st agr - what we do - assure - 'eq'; 2nd - what we assure or expect
         cy.title().should('eq','TechGlobal Training | Home')
         cy.url().should('contains','techglobal-training')


    });

    it("My Myrst Test", () => {
        cy.visit('https://www.techglobal-training.com/');
        cy.get('#logo').click().should('be.visible');

    });
});