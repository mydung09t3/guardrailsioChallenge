# GuardRails Challenge
GuardRails Challenge
# Getting Started
1. Clone code from github
2. Install nodes and npm package 
 If your machine already had Node and npm package, ignore this step
3. Install cypress and dependencies 
   > npm install    
4. Run the test and generate report 
   > npm run test
5. Install Newman
   > npm install newman
6. Go to folder "cypress/reports/mochareports/report.html" and copy the path then open in the browser to view report.
7. How to run API Test: 
   1. Run below command line to run api test. 
     > npm run apitest 
   2. The API test is stored in "cypress/test/API folder". It has 2 files: collection.json and environment.json.
   3. If you want to run in Postman please do below steps: 
      1. Open Postman
      2. Import collection.json file
      3. Import environment.json file
      4. Click on the collection "GuardRail Challenge" > select env is "guardrail" > Run collection
# Explain packge.json file
1. The run command is stored in package.json file
2. To run test: 
 - "npm run test" : this way use to run headless and generate report after run, test run in headless mode
 - "npm run openTest": this way use to open UI and view report directly. 
 - "npm scripts": this way also use to run cypress but it will not gernerate report
 To run all test run all test but doesn't call mochawsome report config
 - "npm run apitest": This way use to run the newman command to run api test suite.
4. Run headless and use specific browser:
 - Add "--browser chrome" to after "cypress run" in "scripts" (package.json file) line if want to run on specific browser
 - Add "--headed" to force browser show when run cypress
   > ex: "scripts": "cypress run --browser chrome --headed" : it will run test using chrome and show the browser. 

Note: I'm doing on MAC. If you run on Window, Please change the command "clean:reports" to like below:
   > "clean:reports": "(if exist cypress\\reports (rmdir /S /Q cypress\\reports)) && mkdir cypress\\reports && mkdir cypress\\reports\\mocha  &&  mkdir cypress\\reports\\mochareports"
