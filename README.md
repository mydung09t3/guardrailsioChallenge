# GuardRails Challenge
GuardRails Challenge
# Getting Started
1. Clone code from github
2. Install nodes and npm package 
 If your machine already had Node and npm package, ignore this step
3. run: npm install 
  This step to install cypress, newman and dependencies   
4. run command line: npm run test
This one will run the test and generate report
5. Go to folder cypress/reports/mochareports/report.html and copy the path then open in the browser to view report.
6. How to run API Test: 
   1. run command line: npm run apitest 
   This command use to run api test. 
   2. The API test store in cypress/test/API folder. It has 2 file: collection and enviroment.
# Explain packge.json file
1. The run command is stored in package.json file
2. To run test: 
 - npm run test  --this way use to run headless and generate report after run, test run in headless mode
 - npm run openTest -- this way use to open UI and view report directly. 
 - npx cypress run  - this way also use to run cypress
 To run all test run all test but doesn't call mochawsome report config
 - npm run apitest: This way use to run the newman command to run api test suite.
4. use: --browser chrome --into package.json "scripts" line if want to run on specific browser
   - use "--headed" to force browser show when run cypress
  ex: "scripts": "cypress run --browser chrome --headed" : it will run all test and show in browser. 
