
import * as singleBoardTwoListsFiveCards from './fixtures/singleBoardTwoListsFiveCards.json'
import * as singleBoardSingleListSingleCard from './fixtures/singleBoardSingleListSingleCard.json'
import * as threeBoards from './fixtures/threeBoards.json'
import * as empty from './fixtures/empty.json'

const beforeTestSeeds = {
  'cypress/e2e/01_api_testing/02_chaining_requests/demo_start.cy.js': empty,
  'cypress/e2e/01_api_testing/02_chaining_requests/demo_end.cy.js': empty,
  'cypress/e2e/01_api_testing/02_chaining_requests/challenge_solution.cy.js': empty,
}

const beforeEachTestSeeds = {
  'cypress/e2e/01_api_testing/01_basics/demo_end.cy.js': threeBoards,
  'cypress/e2e/01_api_testing/01_basics/demo_start.cy.js': threeBoards,
  'cypress/e2e/01_api_testing/01_basics/challenge.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_api_testing/01_basics/challenge_solution.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_api_testing/03_complex_responses/demo_end.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/03_complex_responses/demo_start.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/03_complex_responses/challenge.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/03_complex_responses/challenge_solution.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/04_json_schemas/demo_end.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/02_best_practices/01_common_problems/demo_end.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/01_common_problems/demo_start.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/01_common_problems/challenge.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/01_common_problems/challenge_solution.cy.ts': singleBoardTwoListsFiveCards,
}

// @ts-ignore
const testPath = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

before(() => {

  const dbState = beforeTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach(() => {

  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})