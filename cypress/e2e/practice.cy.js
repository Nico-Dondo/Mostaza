import { hamburger } from '../support/Pages/hamburger.cy.js'
import { menu } from '../support/Pages/menu.cy.js'
import { categorias } from '../support/Pages/categorias.cy.js'
import { trabajaConNosotros } from '../support/Pages/trabajaConNosotros.cy.js'
import 'cypress-xpath';


describe('Pruebas de Menú Mostaza', () => {
  const hamburgerPage = new hamburger();
  const menuPage = new menu();
  const categoriasPage = new categorias();

  beforeEach(() => {
    cy.visit('/');  
  });

  it('Prueba de recorrido', () => {
    hamburgerPage.hamburgerClick();
    hamburgerPage.menuclick();
    menuPage.dobleArgentum();
    menuPage.dobleMega();
  });

  it('Prueba de recorrido entre menues', () => {
    hamburgerPage.hamburgerClick();
    hamburgerPage.menuclick();
    categoriasPage.CategoriaPollo();
    categoriasPage.CategoriaParaVos();
  });
});


describe('Prueba Formulario VideoCV', () => {
  it('completa formulario de trabaja con nosotros', () => {
    const trabajaConNosotrosPage = new trabajaConNosotros();
    
    cy.visit(Cypress.config('trabajaUrl'));
    
    trabajaConNosotrosPage.nombre();
    trabajaConNosotrosPage.lastName();
    trabajaConNosotrosPage.arca();
    trabajaConNosotrosPage.fechaDeNacimiento();
    trabajaConNosotrosPage.correo();
    trabajaConNosotrosPage.phone();
    trabajaConNosotrosPage.estudios();
    trabajaConNosotrosPage.carreraUniversitaria();
    cy.scrollTo('bottom');
    trabajaConNosotrosPage.puestoDePreferencia();
    trabajaConNosotrosPage.street();
    trabajaConNosotrosPage.number();
    trabajaConNosotrosPage.localidad();
    trabajaConNosotrosPage.provincie();
    trabajaConNosotrosPage.horas();
    trabajaConNosotrosPage.back()
  });
});
