import { url } from '../fixtures/site'
import MenuLateral from '../pages/menuLateralComponent'
import AdicionaFuncionarioPage from '../pages/seaFuncionarioPage'
import { funcionarios } from '../fixtures/funcionarios'
import { epifuncionarios } from '../fixtures/epiFuncionarios'

const menu = new MenuLateral();
const formulario = new AdicionaFuncionarioPage();


describe('Executa teste de acesso', () => {
  beforeEach(() => {
    cy.visit(url.site)
  })

  it('Verifica se o site contem o status HTTP correto', () => {
    cy.request('GET', url.site)
      .should((response) => {
        expect(response.status).to.eq(200); // Example assertion
      });
  });

  it('não deve realizar chamada para /employees', () => {
    cy.intercept('GET', '/employees', (req) => {
      throw new Error('Chamada indevida para /employees no fluxo de UI');
    });
  });

  it('Acessa o site', () => {
    cy.get('.c-kQDOON').should('be.visible')
    cy.get('.descriptionSpan').should('be.visible')
    cy.get('.descriptionImage').should('be.visible')
    cy.get('.c-eFRCyV').should('be.visible')
    cy.get('.c-jqbATT').should('be.visible')
    cy.get('h2').should('be.visible')
    cy.get('.c-hfAyug > :nth-child(1)')
    cy.get('.clear').should('be.visible')
    cy.get('.c-kGuehp > :nth-child(1)')
    cy.get('.c-gJFkWm > :nth-child(1)')
    cy.get('.c-iEmfuV').should('be.visible')
    cy.get('.c-iuBfvZ').should('be.visible')
    formulario.getAddButton()
    formulario.validaVisibilidadeForm()
    cy.get('button > img').click()
  });

});

describe('Cadastra funcionario', () => {
  beforeEach(() => {
    cy.visit(url.site)
  })

  it('Insere um funcionario que tem dados corretos', () => {
    formulario.getAddButton()
    formulario.getFuncionarioAtivo()
    formulario.getName().type(funcionarios.funcionarioPadrao.name)
    formulario.getSelecionarSexo(funcionarios.funcionarioPadrao.sexo)
    formulario.getCPF().type(funcionarios.funcionarioPadrao.cpf)
    formulario.getRG().type(funcionarios.funcionarioPadrao.rg)
    formulario.getBirthday().type(funcionarios.funcionarioPadrao.data)
    formulario.getCargoDropdown()
    formulario.openCargoDropdown()
    formulario.selectCargoOption(funcionarios.funcionarioPadrao.cargo)
    formulario.getAtividadeDropdown()
    formulario.openAtividadeDropdown()
    formulario.selectAtividadeOption(epifuncionarios.funcionarioPadrao.atividade)
    formulario.getSelecioneEpi(epifuncionarios.funcionarioPadrao.epi)
    formulario.getNumeroCa().type(epifuncionarios.funcionarioPadrao.ca)
    formulario.getAddEPI()
    cy.contains('Salvar').click()
  });

  it('Insere um funcionario sem epi', () => {
    formulario.getAddButton()
    formulario.getFuncionarioAtivo()
    formulario.getName().type(funcionarios.funcionarioSemEPI.name)
    formulario.getSelecionarSexo(funcionarios.funcionarioSemEPI.sexo)
    formulario.getCPF().type(funcionarios.funcionarioSemEPI.cpf)
    formulario.getRG().type(funcionarios.funcionarioSemEPI.rg)
    formulario.getBirthday().type(funcionarios.funcionarioSemEPI.data)
    formulario.getCargoDropdown()
    formulario.openCargoDropdown()
    formulario.selectCargoOption(funcionarios.funcionarioSemEPI.cargo)
    formulario.getAtividadeDropdown()
    formulario.openAtividadeDropdown()
    cy.contains('O trabalhador não usa EPI.').click()
    cy.contains('Salvar').click()
  });

  it('Insere um funcionario que tem dados incorretos', () => {
    formulario.getAddButton()
    formulario.getFuncionarioAtivo()
    formulario.getName().type(funcionarios.funcionarioDadosInvalidos.name)
    formulario.getSelecionarSexo(funcionarios.funcionarioDadosInvalidos.sexo)
    formulario.getCPF().type(funcionarios.funcionarioDadosInvalidos.cpf)
    cy.contains('CPF inválido').should('be.visible')
    formulario.getRG().type(funcionarios.funcionarioDadosInvalidos.rg)
    cy.contains('RG inválido').should('be.visible')
    formulario.getBirthdayWrong().type(funcionarios.funcionarioDadosInvalidos.data)
    formulario.getBirthdayWrong().should('not.have.value', funcionarios.funcionarioDadosInvalidos.data)
    cy.contains('Data inválida').should('be.visible');
    formulario.getCargoDropdown()
    formulario.openCargoDropdown()
    formulario.selectCargoOption(funcionarios.funcionarioDadosInvalidos.cargo)
    formulario.getAtividadeDropdown()
    formulario.openAtividadeDropdown()
    formulario.selectAtividadeOption(epifuncionarios.funcionarioDadosInvalidos.atividade)
    formulario.getSelecioneEpi(epifuncionarios.funcionarioDadosInvalidos.epi)
    formulario.getNumeroCa().type(epifuncionarios.funcionarioDadosInvalidos.ca)
    formulario.getAddEPI()
    cy.contains('Salvar').click()
  });

  it('Testa botão de Adicionar atividade', () => {
    formulario.getAddButton()
    formulario.getFuncionarioAtivo()
    formulario.getName().type(funcionarios.funcionarioPadrao.name)
    formulario.getSelecionarSexo(funcionarios.funcionarioPadrao.sexo)
    formulario.getCPF().type(funcionarios.funcionarioPadrao.cpf)
    formulario.getRG().type(funcionarios.funcionarioPadrao.rg)
    formulario.getBirthday().type(funcionarios.funcionarioPadrao.data)
    formulario.getCargoDropdown()
    formulario.openCargoDropdown()
    formulario.selectCargoOption(funcionarios.funcionarioPadrao.cargo)
    formulario.getAtividadeDropdown()
    formulario.openAtividadeDropdown()
    formulario.selectAtividadeOption(epifuncionarios.funcionarioPadrao.atividade)
    formulario.getSelecioneEpi(epifuncionarios.funcionarioPadrao.epi)
    formulario.getNumeroCa().type(epifuncionarios.funcionarioPadrao.ca)
    formulario.getAddEPI()
    cy.get('.c-dXMXNE > .c-dylnRB').its('length').then((countBefore) => {
      formulario.getAdicionarOutraAtividade();
      cy.get('.c-dXMXNE > .c-dylnRB').should('have.length', countBefore + 1);
      throw new Error('O botão não adiciona uma nova atividade');
    });
  });

})

describe('Verifica botões', () => {
  beforeEach(() => {
    cy.visit(url.site)
  })

  it('Verifica primeiro botão do menu lateral', () => {
    cy.url().should('eq', url.site)
    menu.getPrimeiroBotao();
    cy.url().should('not.eq', url.site)
  });

  it('Verifica primeiro de menu funcionario', () => {
    cy.url().should('eq', url.site)
    cy.get(':nth-child(1) > .c-jyZWAy').click()
    cy.contains('button', 'Alterar').should('be.visible');
    cy.contains('button', 'Excluir').should('be.visible');
  });

  it('Verifica segundo botão do menu lateral', () => {
    cy.url().should('eq', url.site)
    menu.getSegundoBotao
    cy.url().should('eq', url.site)
  });

  it('Verifica terceiro botão do menu lateral', () => {
    cy.url().should('eq', url.site)
    menu.getTerceiroBotao();
    cy.url().should('not.eq', url.site)
  });

  it('Verifica quarto botão do menu lateral', () => {
    cy.url().should('eq', url.site)
    menu.getQuartoBotao();
    cy.url().should('not.eq', url.site)
  });

  it('Verifica quinto botão do menu lateral', () => {
    cy.url().should('eq', url.site)
    menu.getQuintoBotao();
    cy.url().should('not.eq', url.site)
  });

  it('Verifica sexto botão do menu lateral', () => {
    cy.url().should('eq', url.site)
    menu.getSextoBotao();
    cy.url().should('not.eq', url.site)
  });

  it('Verifica botão voltar formulario', () => {
    cy.url().should('eq', url.site)
    formulario.getAddButton()
    cy.get('button > img').click()
    cy.url().should('eq', url.site)
  });



  it('Verifica botão Proxima Pagina está ativo', () => {
    cy.get('.ant-switch').then(($switch) => {
      if ($switch.hasClass('ant-switch-checked')) {
        cy.get('.c-iuBfvZ').should('not.be.disabled');
      }
      else {
        cy.get('.c-iuBfvZ').should('be.disabled');
      }
    })
  });

  it('Verifica botão Proxima Pagina está ativo quando está selecionado etapa concluida', () => {
    cy.get('.ant-switch').click()
    cy.get('.ant-switch').then(($switch) => {
      if ($switch.hasClass('ant-switch-checked')) {
        cy.get('p.isConcluded').should('be.visible');
        cy.get('.c-iuBfvZ').should('not.be.disabled');
        cy.get('.c-iuBfvZ').click()
        cy.url().should('not.eq', url.site)
      }
      else {
        cy.get('.c-iuBfvZ').should('be.disabled');
      }
    })
  });

});