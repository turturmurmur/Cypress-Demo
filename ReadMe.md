![Cypress](https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png)
### PS: Please leave a star as well if you clone the repo ;)
### This is done by Murat Erdem to demo some features of Cypress tool for automation purposes.



The tests are inside integration folder.
Plugins will have the mochawesome reporter installed for generating a report after running.

To start Cypress 'npx cypress open' or use the custom script done 'npm run cy:open' wait for it to open up and run as you like.
To run headless all the scripts 'npx cypress run' this will create reports as well and  to run a specific test ' npx cypress run --spec="path/to/one/test" '. 

customCommandTest.spec.js with app.ts and visibleCommands.ts will show how to use custom commands and how to implement App Actions model.
fixtureTest.spec.js will show how to use fixtures to call data from fixtures folder.

Initial typescript setup is done and some custom commands are included.
Prettier config is done and usable.

If wanted can be used to turn into a full framework with Cypress.