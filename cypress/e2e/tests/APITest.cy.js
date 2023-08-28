/// <reference types="Cypress" />
/*This goes to my childhood cartoon Pokemon*/

describe('Cypress API testing', () => {
	it('get call', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/pikachu').as('pikachu')
		cy.get('@pikachu')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json; charset=utf-8')
	})

	it('validate status code', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/pikachu') //you don't need to use alias pikachu
			.its('status')
			.should('equal', 200)
	})

	it('validate body', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/pikachu').as('pikachu')
		cy.get('@pikachu').its('body').should('include', { name: 'pikachu' })
	})

	it('validate body in detail', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/pikachu').as('pikachu')
		cy.get('@pikachu').should(response => {
			var array = ['mega-punch', 'pay-day']
			for (var i = 0; i < array.length; i++) {
				expect(response.body.moves[i].move.name).to.eq(array[i])
			}
			//bypass the repetition with loop like above or do it like this
			// expect(response.body.moves[0].move).to.have.property('name','mega-punch')
			// expect(response.body.moves[1].move).to.have.property('name','pay-day')
		})
	})
	it('validate negative status code', () => {
		cy.request({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/pikacha',
			failOnStatusCode: false,
			delay: 10000,
		}).as('pikachu')
		cy.get('@pikachu').its('status').should('equal', 404)
	})

	it('validate chucknorrisapi status code', () => {
		cy.request({
			method: 'GET',
			url: 'https://api.chucknorris.io/jokes/random',
			delay: 10000,
		}).as('chuckNorris')
		cy.get('@chuckNorris').its('status').should('equal', 200)
		cy.get('@chuckNorris').its('body').should('not.be.null')
		cy.get('@chuckNorris').its('body.value').should('be.a', 'string')
	})
})
