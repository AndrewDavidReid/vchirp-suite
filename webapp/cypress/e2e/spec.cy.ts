describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Valorant Chirps')
  })

  it('Finds the chirp heading', () => {
    cy.visit('/')
    cy.contains('Add a Chirp')
  })
})
