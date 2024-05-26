/// <reference types="cypress" />
describe('Validate Contact Us page' ,() => {

  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/project-1');
  })

  it('1 - Validate Contact Us info', () => {
    cy.get('.is-size-3').should('have.text', 'Contact Us');
    cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');
    cy.get('#email').should('have.text', 'info@techglobalschool.com');
    cy.get('#phone-number').should('have.text', '(224) 580-2150');
  })


  it('2 - Validate the Full name input box', () => {
    cy.get('.field').first().should('be.visible');
    cy.get('.input:nth-child(1)').first().should('have.attr', 'required')
    cy.get('.field').first().should('have.text', 'Full name *')
    cy.get('.input').first().should('have.attr', 'placeholder', 'Enter your full name')

  })

  it('3 - Validate the Gender radio button', () => {
    cy.get('.control > .label').should('be.visible')
    cy.get(':nth-child(2) > .mr-1, :nth-child(3) > .mr-1').should('have.attr', 'required')
    cy.get('.radio').should('be.visible')
    cy.get('.mr-1').should('be.enabled')
    .and('not.be.selected')
    cy.get('.mr-1').first().click().should('be.checked')
    cy.get('.ml-0 .mr-1').each(($el) => {
      cy.wrap($el).should('be.empty')
    })
    cy.get('.ml-0 .mr-1').first().click().should('be.checked')
      cy.get('.mr-1').first().should('be.empty')
      cy.get('.ml-0 .mr-1').last().should('be.empty')
    
  })


  it('4 - Validate the Address input box',() => {
    cy.get(':nth-child(1) > .control > .input').should('be.visible');
    cy.get(':nth-child(3) > .control > .input').should('not.have.attr', 'required');
    cy.get('.field:nth-child(3)').should('have.text', 'Address')
    cy.get('.input[type="text"]').last().should('have.attr', 'placeholder', 'Enter your address')
    })

    it('5 - Validate the Email input box', () => {
      cy.get('.input[type="email"]').should('be.visible');
      cy.get('.input[type="email"]').should('have.attr', 'required');
      cy.get('.field:nth-child(4)').first().should('have.text', 'Email *')
      cy.get('.input[type="email"]').should('have.attr', 'placeholder', 'Enter your email')
    })

    it('6 - Validate the Phone input box', () => {
      cy.get('.input[type="phone"]').should('be.visible');
      cy.get('.input[type="phone"]').should('not.have.attr', 'required');
      cy.get('.field:nth-child(5)').first().should('have.text', 'Phone');
      cy.get('.input[type="phone"]').should('have.attr', 'placeholder', 'Enter your phone number');
    })

    it('7 - Validate the Message text area', () => {
      cy.get('.textarea').should('be.visible')
      cy.get('.textarea').should('not.have.attr', 'required')
      cy.get('.field:nth-child(6)').should('have.text', 'Message')
      cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...')
    })

    it('8 - Validate the Consent checkbox', () => {
      cy.get('.checkbox').should('be.visible')
      cy.get('[type="checkbox"]').should('have.attr', 'required')
      cy.get('[type="checkbox"]').should('be.enabled')
      cy.get('[type="checkbox"]').click().should('be.checked')
      cy.get('[type="checkbox"]').click().should('not.be.checked')
    })

    it('9 - Validate the SUBMIT button', () => {
      cy.get('.button.is-link').should('be.visible')
      cy.get('.button.is-link').should('be.enabled')
      cy.get('.button.is-link').should('have.text', 'SUBMIT')
    })

    it('10 - Validate the form submission', () => {

      const fullName = 'John Doe';
      const address = '123 Test Rd';
      const email = 'test123@gmail.com';
      const phone = '000-000-0000';
      const message = 'This is my message.';

      cy.get('.input').first().type(fullName)
      cy.get('.radio.ml-0+label').click()
      cy.get('.input[type="text"]').last().type(address)
      cy.get('.input[type="email"]').type(email)
      cy.get('.input[type="phone"]').type(phone)
      cy.get('.textarea').type(message)
      cy.get('[type="checkbox"]').click()
      cy.get('.button.is-link').click()
      cy.get('.mt-5').should('have.text', 'Thanks for submitting!')
    })
    Cypress.on("uncaught:exception", () => {
      return false;
    });
})