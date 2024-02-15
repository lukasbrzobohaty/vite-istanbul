describe('Example', () => {
    it('Visit page', () => {
        cy.visit('/');

        cy.get('[data-cy="hello-world-button"]').click();
        cy.get('[data-cy="hello-world-2-button"]').click();
    });
});
