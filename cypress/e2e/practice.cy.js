
import { hamburger } from '../support/Pages/hamburger.cy.js'
import { menu } from '../support/Pages/menu.cy.js'
import { categorias } from '../support/Pages/categorias.cy.js'
import { trabajaConNosotros } from '../support/Pages/trabajaConNosotros.cy.js'
import 'cypress-xpath';


describe('Prueba de Mostaza', () => {
  const hamburgerPage = new hamburger();
  const menuPage = new menu();
  const categoriasPage = new categorias();
  const trabajaConNosotrosPage = new trabajaConNosotros();

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

  it('Prueba formulario de trabaja con nosotros', () => {
    hamburgerPage.hamburgerClick();
    hamburgerPage.workWithUsClick();


    trabajaConNosotrosPage.nombre();
    trabajaConNosotrosPage.lastName();
    trabajaConNosotrosPage.arca();
    trabajaConNosotrosPage.fechaDeNacimiento();
    trabajaConNosotrosPage.correo();
    trabajaConNosotrosPage.phone();
    trabajaConNosotrosPage.estudios();
    cy.scrollTo('bottom');
    trabajaConNosotrosPage.puestoDePreferencia();
    trabajaConNosotrosPage.street();
    trabajaConNosotrosPage.number();
    trabajaConNosotrosPage.localidad();
    trabajaConNosotrosPage.provincie();
  });
})


