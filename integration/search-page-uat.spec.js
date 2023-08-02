const ROOT_URL = 'http://localhost:1234'
import { search_collection } from '../src/utils/constants'

const wt = 500;
function formatString(text) {
  return text.replace(/,/g, '');
}

context('Search page', () => {
  it('Filter should not be visible if scope or profile are not present in the URL', () => {
    cy.visit(`${ROOT_URL}/`)
    cy
      .get('.qg-filter-by-results')
      .should('not.exist')
    // also if profile is 'qld', the filter should not appear
    cy.visit(`${ROOT_URL}/?query=rego&num_ranks=10&tiers=off&collection=${search_collection}&profile=disaster`)
    cy
      .get('.qg-filter-by-results')
      .should('not.exist')
  })

  // scope is present with no profile
  it("Filter should appear if scope is present, but if its value is not 'qld.gov.au'", () => {
    cy.visit(`${ROOT_URL}/?query=rego&num_ranks=10&tiers=off&collection=${search_collection}&profile=disaster&scope=tmr.qld.gov.au&collection=${search_collection}`)
    cy
      .get('.qg-filter-by-results')
      .should('be.visible')
  })


  it('Select a radio button to determine the number of results', () => {
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 1426)
    cy.get('input[name=filterBy][value=\'qld\']').first().check()
    cy.get('.qg-btn__filter').click()
    cy.wait(wt)
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 29355)
    cy.wait(wt)
    cy.get('input[name=filterBy][value=\'custom\']').first().check()
    cy.get('.qg-btn__filter').click()
    cy.wait(wt)
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 1426)
  })

  // profile is present with no scope
  it('Filter should be visible if profile is present with no scope', () => {
    cy.visit(`${ROOT_URL}/?query=rego&num_ranks=10&tiers=off&collection=${search_collection}&profile=forgov&scope=&collection=${search_collection}&filter=true`)
    cy
      .get('.qg-filter-by-results')
      .should('be.visible')
  })

  it('Check results by changing filters', () => {
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 1450)
    cy.get('input[name=filterBy][value=\'qld\']').first().check()
    cy.get('.qg-btn__filter').click()
    cy.wait(wt)
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 29355)
    cy.get('input[name=filterBy][value=\'custom\']').first().check()
    cy.get('.qg-btn__filter').click()
    cy.wait(wt)
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 1450)
  })
})
