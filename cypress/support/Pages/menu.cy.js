export class menu{
    constructor(){
        this.DobleArgentum = '.elementor-flip-box__layer__overlay';
        this.DobleMegaBoom = '.elementor-flip-box__layer__overlay';
    }
    dobleArgentum(){
        cy.get(this.DobleArgentum).should('be.visible')
    };
    dobleMega(){
        cy.get(this.DobleMegaBoom).should('be.visible')
    }
}

