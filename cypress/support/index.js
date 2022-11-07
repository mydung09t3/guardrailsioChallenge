import "./commands/commands";
import "cypress-mochawesome-reporter/register";
import addContext from "mochawesome/addContext"
import registerCypressGrep from "cypress-grep";
registerCypressGrep();
require("cypress-xpath");
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
Cypress.on("test:after:run", (test, runnable) => {  
  if (test.state === "failed") {    
    const screenshot =`assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;    
addContext({ test }, screenshot);  
  }
});
