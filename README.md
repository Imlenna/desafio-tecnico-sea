# desafio-tecnico-sea

Este reposítorio contém um teste automatizado de interface utilizando o framework de automação Cypress para validar a página de Formulario de funcionario (https://analista-teste.seatecnologia.com.br/) para a vaga de Analista de Testes. 

# :mag_right: O que será testado via automação
- Formulario de inserção de funcionarios e EPI
- Botões da página principal
- Teste de Segurança
- Resoluções que o site funciona

# :books: Tecnologias usadas
- ![image](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
- ![image](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
    
    
# :open_file_folder: Como instalar?
Primeiro, clone o repositório para seu ambiente:
```bash
git clone https://github.com/Imlenna/desafio-tecnico-sea.git
```
Depois, entre no repositório clonado e no diretório correspondente ao que quer testar. Logo após, insira os seguintes comandos no seu terminal para rodar:
```bash    
cd desafio-tecnico-sea
```
Instala todas as dependências
```bash
> yarn install or npm install
```
# :arrows_counterclockwise: Como executar os testes?
Executar os testes:
```bash
> npx cypress run
```
Visualizar a execução no navegador
```bash
>npx cypress open
```
## Visualização do relatório após a execução:

> ./relatiorios/screenshots

> ./relatiorios/videos


# Estrutura do Projeto

```tree
.
├── bug-report/                           <- Bugs encontrados na aplicação 
├── cypress/                              <- Testes
│   ├── e2e/                              <- Testes automatizados
│   ├── fixtures/                         <- Dados
│   │   └── epiFuncionarios.js            <- Epi de cada funcionario
│   │   └── funcionarios.js               <- Funcionarios      
│   │   └── site.js                       <- Url do site   
│   └── pages/                            <- Testes de paginas
│   │   └── menuLateralComponent.js       <- Itens do menu lateral
│   │   └── seaFuncionarioPage.js         <- Informações do Formulario
│   └── support/                          <- Pasta para criação de comandos customizados
├── testes-executados/                    <- Pasta de testes do projeto
│   │   └── gherkin/                      <- Pasta de plano de testes do projeto
│   │       └──gherkin.feature            <- Plano de testes manuais executado
│   │   └── relatorios/                   <- Evidencia dos relatorios dos testes automatizados
│   │       └──screenshots                <- Prints dos erros dos testes automatizados
│   │       └──videos                     <- Videos dos erros dos testes automatizados
└── README.md                             <- Este arquivo
```

## Testes automatizados
Os testes automatizados estão na pasta `/cypress/e2e`, escritos com Cypress.

## Documentação Bugs
- Exemplos de bug report estão na pasta `/bug-report/template/template.md`

## Plano de testes
- Os testes manuais executados estão na pasta `/testes-executados/gherkin/`

# O Projeto

 - Mesmo utilizando POM no projeto existem abordagens melhores
 - O bug report nas pastas do projeto foi algo pedido pela empresa, mas existem formas melhores de execução
 - Os testes de acessibilidade poderiam ser automatizados com a ferramenta AXE mas para o tempo de execução do projeto não seria a melhor abordagem, foram feitos os testes de forma manual.

# Desafios e Aprendizagem

 - Integração com Cypress: Aprofundei o uso de boas práticas com Cypress, como uso de interceptações, Page Object Model e validações mais robustas em campos de formulário.
 - Transição dos testes manuais para automatizados: Um dos principais aprendizados foi transformar cenários manuais em testes automatizados, identificando quais passos realmente precisam ser automatizados e quais não agregam valor no código.
 - Aprofundamento em JavaScript e lógica de programação: Durante o desenvolvimento, reforcei conceitos de programação como funções, escopo, estrutura condicional e modularização, essenciais para a criação de testes mais limpos e reutilizáveis.
- Boas práticas de automação: Aprendi a evitar cy.wait() fixo e preferir comandos como cy.get().should(), além de usar cobertura para validação de requisição com o cy.request('GET') e a beforeEach()  para preparar cenários e evitar repetição de código.
- Organização do projeto com Page Object Model (POM): Conheci e apliquei o padrão Page Object para separar lógica de navegação e ações da aplicação dos testes em si, facilitando a escalabilidade e entendimento do projeto.
- Optei por usar arquivos .js em vez de .json para a massa de dados, pois o .js permite incluir lógica e funções que facilitam a validação e manipulação dos objetos no momento da execução dos testes. Pois o .json não possibilitaria a execução de verificações dinâmicas que eu precisei para esse desafio, o que limita a flexibilidade na preparação dos dados de teste.
