export class trabajaConNosotros {
    constructor() {
        this.name = '//*[@id="name"]',
        this.apellido = '//*[@id="surname"]',
        this.cuit = '//*[@id="cuit"]',
        this.birthday = '//*[@id="birthday"]',
        this.email = '//*[@id="email"]',
        this.telefono = '//*[@id="phone"]',
        this.studies = '//*[@id="study"]',
        this.educacion = '//*[@id="study"] > option:nth-child(7)',
        this.puesto = '//*[@id="preference"]',
        this.area = '//*[@id="preference"] > option:nth-child(2)',
        this.calle = '//*[@id="street"]',
        this.numero = '//*[@id="number"]',
        this.location = '//*[@id="location"]',
        this.provincia = '//*[@id="state"]'
    };

    
    nombre() {
        cy.xpath(this.name).scrollIntoView().click().type('Nicolas');
    }

    lastName() {
        cy.xpath(this.apellido).scrollIntoView().click().type('Dondo');
    }

    arca() {
        cy.xpath(this.cuit).scrollIntoView().click().type('20312345678');
    }

    fechaDeNacimiento() {
        cy.xpath(this.birthday).scrollIntoView().click().type('04/04/1980');
    }

    correo() {
        cy.xpath(this.email).scrollIntoView().click().type('nicolas.dondo@example.com');
    }

    phone() {
        cy.xpath(this.telefono).scrollIntoView().click().type('1123456789');
    }

    estudios() {
        cy.xpath(this.studies).scrollIntoView().click();
        cy.xpath(this.educacion).click();
    }

    puestoDePreferencia() {
        cy.xpath(this.puesto).scrollIntoView().click();
        cy.xpath(this.area).click();
    }

    street() {
        cy.xpath(this.calle).scrollIntoView().type('Calle Falsa');
    }

    number() {
        cy.xpath(this.numero).scrollIntoView().type('1234');
    }

    localidad() {
        cy.xpath(this.location).scrollIntoView().type('Ciudad');
    }

    provincie() {
        cy.xpath(this.provincia).scrollIntoView().select('Ciudad Autónoma de Buenos Aires');
    }

    
}
