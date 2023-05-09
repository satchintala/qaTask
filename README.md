# QA Task

This repo contains sample e2e tests written in Cypress
* Simply Health: 2 tests - visting home page and first step in personal member registration
* Pet Store: 4 tests - POST, GET, PUT, DELETE

#  Help + Testing #

If you want to experiment with running this project:
```
## clone this repo to a local directory
git clone https://github.com/satchintala/qatask.git

## cd into the cloned repo
cd local_cloned_directory
  
## intall the node modules
npm install

## use npm scripts in package.json to run the Cypress tests hedaless
npm run test-headless

## use npm scripts in package.json to generate mochawesome report
npm run mochawesome-merge
        
#### use npm scripts in package.json to run Cypress tests and generate mochawesome report
npm run cypress-tests
```
