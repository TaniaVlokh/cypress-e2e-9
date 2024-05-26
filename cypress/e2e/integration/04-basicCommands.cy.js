// const { should } = require("chai");

describe('Cypress Acttions', () => {

  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.contains(".cards", "Html Elements").click();
  });

  /**
   * Visit the techglobal frontend page
   * Click and navigate to Html Elements page
   * Click on the Register button on the Html Elements Page
   * Validate "You clicked on "Register" text is visible
   * And click on the "Sign in" button
   * Validate "You clicked on "Sign in"" text is visible
   */

  it('Click Action', () => {
    
    cy.get('#register_button').click()
    cy.get('.mt-1').should('have.text', 'You clicked on “Register”')

    cy.get('#signin_button').click()
    cy.get('.mt-1').should('have.text', 'You clicked on “Sign in”')

    cy.get('#register_button').click()
    .next()
    .next()
    .should('have.text', 'You clicked on “Register”')
    .prev()
    .click()
    .next()
    .should('have.text', 'You clicked on “Sign in”')
  })
 /**
     * 1. Check on the Apple checkbox button
     * 2. Then Validate its checked
     * 3. Uncheck the Apple checkbox button
     * 4. Validate its unchecked
     */

 it('Text Input', () => {

  // .type('TechGlobal')
  // .clear()

  /**
   * Locate the text inputs, and send text inside the input, 
   * Validate the text you send is inside the input
   * and clear it
   * Validate it is empty
   */

  const inputs = ['Tech', 'Global']

  const [first, last] = inputs

  // cy.log(first)

  cy.get('[data-identifier="Text Inputs"] input').each(($el, index) => {
    cy.wrap($el).type(inputs[index]).should('have.value', inputs[index]).clear().should('be.empty')
  })

  cy.get('#text_input1').type(first).should('have.value', first)
  .clear().should('be.empty').next().children().eq(1).children()
  .type(last).should('have.value', last).clear().should('be.empty')

  cy.get('#text_input1').type(first).should('have.value', first)
  .clear().should('be.empty')

  cy.get('#text_input2').type(last).should('have.value', last)
  .clear().should('be.empty')

})

it('Date Inputs', () => {
  cy.get('#date_input1').type('09/09/2003{enter}');
  cy.get('#date_input2').clear().type('09/09/2003{esc}');

})

it.only('Dropdowns', () => {

  /**
   * If you want to handle the dropdown that is created using <select> web element
   * you MUST use select() method from the Cypress
   */
  cy.get('#company_dropdown1').select('Microsoft').should('have.value', 'Microsoft')

  cy.get('#company_dropdown2').select(2)


  // Dropdown without <select> tag example

  /**
   * If dropdown is created with regular HTML web elements
   * You have to handle it as you handle regular web components
   */
  cy.visit('https://www.techglobal-training.com/frontend/dropdowns')

  cy.get('#shipment_dropdown').click()
  cy.contains('[role="option"]', 'Pick up').click()
})
})

