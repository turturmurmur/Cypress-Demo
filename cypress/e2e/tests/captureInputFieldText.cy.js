describe('', () => {
	it('invoke', () => {
		cy.visit('https://techglobal-training.netlify.app/frontend/html-elements')
		cy.get('[id="text_input1"]').as('inputField')
		const text = 'i am an input text'
		cy.get('@inputField').type(text)
		cy.get('@inputField').should($input => {
			const value = $input.val()
			expect(value).to.eq(text)
		})
	})
})
