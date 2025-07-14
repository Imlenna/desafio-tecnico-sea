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

describe('Testes de segurança e resolução', () => {
  beforeEach(() => {
    cy.visit(url.site)
  })

  it('Insere html no campo de input', () => {
    const teste = '<script>alert("teste")</script>';
    formulario.getAddButton()
    formulario.getName().type(teste)
    formulario.getSelecionarSexo(funcionarios.funcionarioPadrao.sexo)
    formulario.getCPF().type(funcionarios.funcionarioPadrao.cpf)
    formulario.getRG().type(funcionarios.funcionarioPadrao.rg)
    formulario.getBirthday().type(funcionarios.funcionarioPadrao.data)
    formulario.getCargoDropdown()
    formulario.openCargoDropdown()
    formulario.selectCargoOption(funcionarios.funcionarioPadrao.cargo)
    formulario.getNumeroCa().type(epifuncionarios.funcionarioPadrao.ca)
    formulario.getSalvarButton().click()
    cy.get('span').contains('Sea Teste').should('be.visible');

    cy.get('.c-bXqUbA > span').then($spans => {
      for (let i = 0; i < $spans.length; i++) {
        if ($spans[i].textContent === teste) {
          throw new Error('O banco de dados não deveria salvar tags HTML sem filtro');
        }
      }
    });

  })

  it('Insere caracteres especiais no campo de input', () => {
    const fuzzy = `{}[]\\/'"\`$&;()|\n\r\t\u0000\u200B\u200C\u200D\uFEFF>`;
    formulario.getAddButton()
    formulario.getName().type(fuzzy)
    cy.get('.c-bXqUbA > span').then($spans => {
      for (let i = 0; i < $spans.length; i++) {
        if ($spans[i].textContent === fuzzy) {
          throw new Error('O banco de dados não deveria salvar caracteres que ofereçam risco ao sistema');
        }
      }
    });

  })

  it('Insere valores numericos no campo de nome', () => {
    const numerico = '1231231244124'
    formulario.getAddButton()
    formulario.getName().type(numerico)
    formulario.getSelecionarSexo(funcionarios.funcionarioPadrao.sexo)
    formulario.getCPF().type(funcionarios.funcionarioPadrao.cpf)
    formulario.getRG().type(funcionarios.funcionarioPadrao.rg)
    formulario.getBirthday().type(funcionarios.funcionarioPadrao.data)
    formulario.getCargoDropdown()
    formulario.openCargoDropdown()
    formulario.selectCargoOption(funcionarios.funcionarioPadrao.cargo)
    formulario.getNumeroCa().type(epifuncionarios.funcionarioPadrao.ca)
    formulario.getSalvarButton().click()
    cy.get('span').contains('Sea Teste').should('be.visible');
    cy.get('.c-bXqUbA > span').then($spans => {
      for (let i = 0; i < $spans.length; i++) {
        if ($spans[i].textContent === numerico) {
          throw new Error('O banco de dados não deveria numeros no campo de nome');
        }
      }
    });
  })

  it('Insere valores string no campo de cpf', () => {
    const caracteres = 'abcdfghijkl'
    formulario.getAddButton()
    formulario.getName().type(funcionarios.funcionarioPadrao.name)
    formulario.getSelecionarSexo(funcionarios.funcionarioPadrao.sexo)
    formulario.getCPF().type(caracteres)
    formulario.getRG().type(funcionarios.funcionarioPadrao.rg)
    formulario.getBirthday().type(funcionarios.funcionarioPadrao.data)
    formulario.getCargoDropdown()
    formulario.openCargoDropdown()
    formulario.selectCargoOption(funcionarios.funcionarioPadrao.cargo)
    formulario.getNumeroCa().type(epifuncionarios.funcionarioPadrao.ca)
    formulario.getSalvarButton().click()
    cy.get('span').contains('Sea Teste').should('be.visible');
    cy.get('.c-bXqUbA').each(($card) => {
      const nome = $card.find('span').text().trim(); // pega o nome correto
      const cpf = $card.find('.c-cwYURa > .c-iYbcAK').eq(0).text().trim(); // pega o CPF (primeiro campo)
      if (cpf === caracteres) {
        throw new Error(`O CPF do funcionário "${nome}" foi salvo como "${cpf}", mas isso é um nome inválido!`);
      }
    });
  })

  it('Teste Resolução Padrão pagina inicial', () => {
    cy.viewport(1920, 1080)
    cy.get('.c-gJFkWm')
      .children()
      .filter(':visible')
      .should('have.length.at.most', 4);
    cy.get('.c-gJFkWm > :nth-child(6)').should('not.be.visible');
  })

  it('Teste Resolução Padrão do formulario', () => {
    cy.viewport(1920, 1080)
    formulario.getAddButton()
    cy.get('.c-jQtxMc')
      .should('have.css', 'width', '1032px')
      .should('have.css', 'height', '732px')
    cy.get('.descriptionSpan')
      .should('have.css', 'width', '460px')
      .should('have.css', 'height', '439px')
  })

  it('Teste Resolução IOS pagina principal', () => {
    cy.viewport('macbook-16')
    cy.get('.c-gJFkWm')
      .children()
      .filter(':visible')
      .should('have.length.at.most', 4);
    cy.get('.c-gJFkWm > :nth-child(6)').should('not.be.visible');
  })

  it('Teste Resolução Tablet formulario', () => {
    cy.viewport('macbook-16')
    formulario.getAddButton()
    cy.get('.c-jQtxMc')
      .should('have.css', 'width', '762px')
      .should('have.css', 'height', '754px')
    cy.get('.descriptionSpan')
      .should('have.css', 'width', '460px')
      .should('have.css', 'height', '439px')
  })
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
    formulario.getSalvarButton().click()
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
    formulario.getSalvarButton().click()
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
    formulario.getSalvarButton().click()
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