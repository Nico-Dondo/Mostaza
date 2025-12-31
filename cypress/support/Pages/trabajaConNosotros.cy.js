export class trabajaConNosotros {
    constructor() {
        this.name = '#name',
        this.apellido = '#surname',
        this.cuit = '#cuit',
        this.birthday = '#birthday',
        this.email = '#email',
        this.telefono = '#phone',
        this.studies = '#study',
        this.educacion = '#study > option:nth-child(9)',
        this.carrera = '#career'
        this.puesto = '#preference',
        this.area = '#preference > option:nth-child(2)',
        this.calle = '#street',
        this.numero = '#number',
        this.location = '#location',
        this.provincia = '#state',
        this.horario = '#time-availability'
        this.volver = 'body > div > div > div > div > header > a.back-button'
    };

    
    nombre() {
        cy.get(this.name).click().type('Nicolas');
    }

    lastName() {
        cy.get(this.apellido).scrollIntoView().click().type('Dondo');
    }

    arca() {
        cy.get(this.cuit).scrollIntoView().click().type('20312345678');
    }

    fechaDeNacimiento() {
        cy.get(this.birthday).scrollIntoView().click().type('04/04/1980');
    }

    correo() {
        cy.get(this.email).scrollIntoView().click().type('nicolas.dondo@example.com');
    }

    phone() {
        cy.get(this.telefono).scrollIntoView().click().type('1123456789');
    }

    estudios() {
        cy.get(this.studies).select('Universitario en curso');
    }

    carreraUniversitaria() {
        cy.get(this.carrera).scrollIntoView().click().type('Ingeniería en Sistemas');
    }

    puestoDePreferencia() {
        cy.get(this.puesto).select('Restaurantes')
    }

    street() {
        cy.get(this.calle).scrollIntoView().type('Calle Falsa');
    }

    number() {
        cy.get(this.numero).scrollIntoView().type('1234');
    }

    localidad() {
        cy.get(this.location).scrollIntoView().type('Ciudad de Buenos Aires');
    }

    provincie() {
        cy.get(this.provincia).scrollIntoView().type('Ciudad Autónoma de Buenos Aires');
    }

    horas() {
        cy.get(this.horario).scrollIntoView().select('Tarde');
    }

    back(){
        cy.scrollTo('top')
        cy.get(this.volver).click()
    }
}
