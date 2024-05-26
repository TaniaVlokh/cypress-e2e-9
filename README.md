What is NodeJS - is a tool that create backend application. It also offers a wide verity of eco system so we van access some dependencies using it. Bun is alternative it's fast but poor library.
npm - node package manager:

npmjs - is Online registry
CLI (Coomand line Interface)

npx - Node Package Execute

What is first you should do after you clone the framework is - commend -> npm install - to install dependencies.

What is node_modules directory - its always in .gitignore, that's the folder with dependencies uyou have install in your framework
NOTE: you should never push this directory to your VCS.

Put at the top on your file -  <reference types="Cypress"/>

Command to reload your window - command-shift-p -> reload window

RECAP:

	Bundled Libraries

	Mocha and Chai

		Mocha: describe() and it()

			describe() => It's a method it groups the tests together.

			it() 		=> Defines individual test block.


		Chai: All the assertions we will use comes from the chai.

	Basic Commands:	

		- cy.visit() - It's a method that takes us to specific URL.
		- cy.go()	 - It's a navigation that helps you to go back and forward
		- cy.reload() - Refreshes the page.

		- should() - It's a main assertion method.

		- cy.get() - It's a method that helps us to query the element we find on the DOM.

	Locators:

		- XPath and CSS

			- Xpath: 
			Slower compared to CSS
			Syntax is a little harder

			- CSS:
			Faster compared to XPATH
			It's easir to learn and use