//$(npm bin)/cypress open (comando de appertura de  cypress)//
describe('Acceder a la pagina de Mostaza', () => {
    beforeEach(() => {
        cy.visit('https://www.mostazaweb.com.ar//')
    })
    it('buscar en el buscador', () => {
        cy.get('.elementor-element-e367426 > .elementor-widget-container > .elementor-image > a > .attachment-thumbnail').click()
        cy.get('#menu-item-156 > a').wait(2000).click()
        cy.get('.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-328eb8df > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()
        cy.get('#menu-1-267f80d > .menu-item-41 > .elementor-item').click()
        cy.get('[style="width: 100px; height: 100px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 112px; top: -136px; z-index: -36;"] > img').click()
        cy.get('.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-73dd84b4 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').wait(3000).click()
        cy.get('#menu-1-267f80d > .menu-item-home > .elementor-item').click()
        cy.get('.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-57b466e1 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()
       
    })
    it('otras busquedas',()=>{
        cy.get('.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-57b466e1 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()
        cy.get('#menu-1-267f80d > .menu-item-40 > .elementor-item').click()
        cy.get('#form-field-nombre').type('Nicolas Dondo')
        cy.get('#form-field-email').type('nicodondo1980@gmail.com')
        cy.get('#form-field-field_b4917ab').type('Plaza Oeste, Moron, Buenos Aires')
        cy.get('#form-field-mensaje').type('Automatizando con Cypress')
        cy.get('.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-81c9126 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()
        cy.get('#menu-1-267f80d > .menu-item-home > .elementor-item').click()
    })
    it('Franquicias',()=>{
        cy.get('.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-57b466e1 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()
        cy.get('#menu-1-267f80d > .menu-item-44 > .elementor-item').click()
        cy.get('.elementor-element-808a4e3 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .circles')
        cy.get('.elementor-element-f231699 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .circles').click()  
        cy.get('#form-field-nombre').type('Nicolas').wait(1000)
        cy.get('#form-field-apellido').type('Dondo').wait(1000)
        cy.get('#form-field-email').type('nico@aol.com').wait(1000)
        cy.get('#form-field-telefono').type('12341234').wait(1000)
        cy.get('#form-field-zona').type('Moron, Buenos Aires').wait(1000)
        cy.get('#form-field-ocupacin').type('Tester QA Manual y Automation').wait(1000)
        cy.get('#form-field-message').type('Comandos Básicos de automatización con Cypress, utilizando Js como lenguaje predeterminado, a modo de práctica, ESPERO LES HAYA GUSTADO').wait(3000)
        cy.get('.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-819eea0 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-thumbnail').click()

    })
    it ('seleccionar',()=>{
        cy.get('.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-57b466e1 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()
        cy.get('#menu-1-267f80d > .menu-item-44 > .elementor-item').click()
        cy.get('.elementor-element-f231699 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .circles').click()
        cy.get('#form-field-como').select('Publicidad')
    })
})