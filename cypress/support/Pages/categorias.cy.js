export class categorias {
    constructor() {
        this.pollo = '#menu-item-160 > a';
        this.paraVos = '#menu-item-295025 > a';
        this.salads = '#menu-item-159 > a';
    }
    CategoriaPollo() {
        cy.get(this.pollo).should('be.visible').click()
    };
    CategoriaParaVos() {
        cy.get(this.paraVos).should('have.text', 'ParaVos').click()
        
    };
    Ensaladas() {
        cy.get(this.salads).click()
    }
}