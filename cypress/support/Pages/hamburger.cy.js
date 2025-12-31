export class hamburger {
    constructor() {
        this.hamburgerMenu = 'body > header > header.elementor-section.elementor-top-section.elementor-element.elementor-element-42364b2b.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default.elementor-sticky.elementor-sticky--active.elementor-section--handles-inside > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-57b466e1 > div > div > div > div > a'
        this.menu = '#menu-1-267f80d > li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-201 > a',
            this.trabajaConNosotros = '#menu-1-267f80d > li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-664810 > a'
    };


    hamburgerClick() {
        cy.get(this.hamburgerMenu).click();
        cy.wait(2000);
    };
    menuclick() {
        cy.get(this.menu)
            .contains('Menú')
            .should('be.visible')
            .click()
    }
    workWithUsClick() {
        cy.get(this.trabajaConNosotros)
            .click()
    }
}