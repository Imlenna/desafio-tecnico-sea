# Teste manuais realizados e seus respectivos casos de teste
# lang pt-br

# Segurança

# XSS
        Cenario: Teste de XSS no campo de Nome
            Dado que o usuário acessa o formulário
             Quando ele insere um script no campo "Nome"
             Então o sistema não deve executar o script

        Cenario: Teste de XSS no campo de CPF
            Dado que o usuário acessa o formulário
             Quando ele insere um script no campo "CPF"
             Então o sistema não deve executar o script

        Cenario: Teste de XSS no campo de RG
            Dado que o usuário acessa o formulário
             Quando ele insere um script no campo "RG"
             Então o sistema não deve executar o script

        Cenario: Teste de XSS no campo de Informe o número do CA
            Dado que o usuário acessa o formulário
             Quando ele insere um script no campo "Informe o número do CA"
             Então o sistema não deve executar o script
    
# Fuzzing test 
        Cenario: Teste de fuzzing com caracteres especiais Nome
            Dado que o usuário acessa o formulário
             Quando ele insere caracteres especiais no campo "Nome"
             Então o sistema deve validar que não é valido e mostrar uma mensagem de erro

        Cenario: Teste de fuzzing com caracteres especiais CPF
            Dado que o usuário acessa o formulário
             Quando ele insere caracteres especiais no campo "CPF"
             Então o sistema deve validar que não é valido e mostrar uma mensagem de erro

        Cenario: Teste de fuzzing com caracteres especiais RG
            Dado que o usuário acessa o formulário
             Quando ele insere caracteres especiais no campo "RG"
             Então o sistema deve validar que não é valido e mostrar uma mensagem de erro

        Cenario: Teste de fuzzing com caracteres especiais Informe o número do CA
            Dado que o usuário acessa o formulário
             Quando ele insere caracteres especiais no campo "Informe o número do CA"
             Então o sistema deve validar que não é valido e mostrar uma mensagem de erro

# Quebra layout
        Cenário: Preenchimento com valor que quebra o layout
            Dado que o usuário acessa o formulário
             Quando ele insere um valor extremamente longo ou com HTML em qualquer campo de input
             Então o sistema deve evitar que o layout da página seja distorcido ou quebrado
              E o conteúdo deve ser tratado e exibido de forma segura

#Funcionais

# Acessar menu
        Cenario: Teste para acessar o menu lateral
            Dado que o usuário está na pagina inicial
             Quando ele clica em qualquer botão lateral
             Então o sistema deve redirecionar para a pagina respectiva
              E caso exista algo exibir os dados

# Ver funcionarios ativos
        Cenario: Teste para utilizar filtro de funcionarios
            Dado que o usuário está na pagina inicial
             Quando ele clica no botão "Funcionarios Ativos"
             Então o sistema deve filtrar os funcionarios ativos
              E exibir somente esses funcionarios

# Limpar filtro
        Cenario: Teste para utilizar filtro de limpeza
            Dado que o usuário está na pagina inicial
             Quando ele clica no botão "Limpar Filtro"
             Então o sistema deve remover o filtro existente
              E mostrar todos funcionarios existentes no sistema

# Acessar formulario
        Cenario: Teste para acessar formulario
            Dado que o usuário está na pagina inicial
             Quando ele clica no botão "Adicionar Funcionario"
             Então o sistema deve abrir o formulário de Funcionário
              E o formulário deve conter os campos Nome, CPF, RG, Data de nascimento, Sexo e Cargo

# Voltar formulario
        Cenario: Teste para acessar formulario
            Dado que o usuário está na pagina de formulario
             Quando ele clica na seta de voltar
             Então o sistema deve voltar a pagina inicial
              E o deve conter os botões de Adiciona Funcionario, Filtar Ativos, Limpar Filtros, Etapa Concluida e Proxima Etapa

# Preencher formulario
        Cenario: Teste para preencher dados
            Dado que o usuário acessa o formulário
             Quando ele insere dados nos campos
             Então o sistema deve validar se todos os campos obrigatórios foram preenchidos
              E salvar os dados no banco de dados

# Preencher formulário com CPF inválido
        Cenário: Validação de CPF incorreto no formulário
            Dado que o usuário acessa o formulário
             Quando ele insere um valor inválido no campo CPF
             Então o sistema deve validar o campo
              E exibir uma mensagem de erro indicando CPF inválido

# Preencher formulario com valores nos campos errados RG
        Cenário: Preenchimento com RG inválido
            Dado que o usuário acessa o formulário
             Quando ele insere um valor inválido no campo RG
             Então o sistema deve exibir uma mensagem de erro referente ao RG

# Preencher formulario com valores nos campos errados Data de nascimento
        Cenário: Preenchimento com data inválida
            Dado que o usuário acessa o formulário
             Quando ele insere uma data inválida no campo Data de Nascimento
             Então o sistema deve exibir uma mensagem de erro referente à data

# Preencher formulario com valores nos campos errados EPI
        Cenário: Preenchimento com EPI
            Dado que o usuário acessa o formulário
             Quando ele não insere um valor no campo EPI
             Então o sistema deve exibir uma mensagem de erro referente ao EPI

# Preencher formulario tipo de EPI
        Cenário: Preenchimento de tipo de EPI
            Dado que o usuário acessa o formulário
             Quando ele seleciona um valor no campo atividade de EPI
             Então o sistema deve exibir na tela principal a atividade que utiliza a EPI

# Preencher formulario tipo de EPI função vazia
        Cenário: Não preenchimento de tipo de EPI
            Dado que o usuário acessa o formulário
             Quando ele não seleciona um valor no campo atividade de EPI
             Então o sistema deve exibir uma mensagem de erro

# Preencher formulario função
        Cenário: Preencher função
            Dado que o usuário acessa o formulário
             Quando ele insere um cargo
             Então o sistema deve exibir na tela principal o cargo designado

# Preencher formulario função vazia
        Cenário: Não preenchimento do campo de função
            Dado que o usuário acessa o formulário
             Quando ele não insere um cargo
             Então o sistema deve exibir uma mensagem de erro

# Inserir arquivo corrompido
        Cenário: Envio de arquivo corrompido
            Dado que o usuário seleciona um arquivo corrompido
             Quando tenta fazer o upload no formulário
             Então o sistema deve recusar o arquivo e exibir uma mensagem de erro

# Botão de menu dados 
        Cenário: Clique no botão Excluir
            Dado que o usuário está com dados preenchidos no formulário
             Quando ele clica no botão "Excluir"
             Então deve aparecer uma mensagem de "Usuário excluído com sucesso!"

# Botão de menu dados
        Cenário: Clique no botão Alterar
            Dado que o usuário visualiza os dados cadastrados
             Quando ele clica no botão "Alterar"
             Então os campos devem ser habilitados para alteração

# Botão Etapa concluida
        Cenário: Aceitação da etapa no formulário
            Dado que o usuário preencheu corretamente todos os campos obrigatórios
             Quando ele clica no botão "Etapa concluída"
             Então o sistema deve marcar o item 1 como concluído
              E o botão de "Próximo" deve ser habilitado

# Botão Proximo Passo
        Cenário: Avançar com dados válidos
            Dado que o usuário preencheu corretamente todos os campos obrigatórios
             Quando ele clica no botão "Próximo Passo"
             Então deve ser redirecionado para a próxima etapa do formulário

        Cenário: Avançar
            Dado que o usuário para a próxima etapa do formulário
              E a etapa está selecionada
             Quando ele clica no botão "Próximo Passo"
             Então deve ser redirecionado para a etapa seguinte do formulário

# Botão Anterior
        Cenário: Voltar
            Dado que o usuário para a próxima etapa do formulário
              E a etapa está selecionada
             Quando ele clica no botão "Passo Anterior"
             Então deve ser redirecionado para a etapa anterior do formulário

# Mensagem de erro
        Cenário: Exibição de mensagens de erro ao enviar dados em branco
            Dado que o usuário não preenche os campos obrigatórios
             Quando envia o formulário
             Então o sistema deve exibir mensagens de erro apropriadas para cada campo

# Acessibilidade
    # Contraste
        Cenário: Contraste adequado em campos e botões
            Dado que o usuário acessa o sistema em ambiente com pouca luz
             Quando ele observa os textos e botões
             Então o contraste deve ser suficiente para leitura confortável

# Dados no html para os campos de inserção de dados
        Cenário: Presença de identificadores e labels
            Dado que o formulário está renderizado
             Quando o usuário inspeciona os campos
             Então deve haver labels associadas e atributos como name, id e for corretamente definidos

# Compatibilidade

# Mozila
        Cenário: Renderização correta no Mozilla Firefox
            Dado que o usuário acessa o sistema pelo navegador Mozilla Firefox
             Quando ele navega até o tela principal
             Então todos os elementos devem ser exibidos corretamente e com bom desempenho
             
# Chrome
        Cenário: Renderização correta no Google Chrome
            Dado que o usuário acessa o sistema pelo navegador Google Chrome
             Quando ele navega até o tela principal
             Então todos os elementos devem ser exibidos corretamente e com bom desempenho

# Responsividade IOS
        Cenário: Visualização em iPhone
            Dado que o usuário acessa o sistema por um dispositivo iOS
             Quando ele visualiza a tela do principal
             Então os elementos devem se adaptar corretamente ao tamanho da tela

# Responsividade Android
        Cenário: Visualização em Android
            Dado que o usuário acessa o sistema por um dispositivo Android
             Quando ele visualiza a tela principal
             Então os elementos devem se adaptar corretamente ao tamanho da tela

# Layout

        Cenário: Validação visual do layout principal
            Dado que o usuário acessa a página inicial do sistema
             Quando a página é carregada completamente
             Então o layout deve conter duas colunas alinhadas corretamente
              E o menu principal deve estar visível na lateral com fundo de fundo #649FBF
              E o texto da coluna da esquerda deve está com 16 px na fonte "Ubuntu" com cor #959595
              E a imagem abaixo do texto deve estar dentro da coluna da esquerda com cor #959595 e com 142x156
              E os elementos de fundo deve estar posicionada à direita inferior com a cor #649FBF com 20% de opacidade tendo 180x176
              E os textos de navegação superior estar na fonte "Ubuntu", tamanho 14px
              E os botões de definição de cargo e atividade devem ter a cor de fundo #649FBF
              E os botões de menu devem ter a cor de fundo #649FBF
              E os usuarios ativos devem ter a cor de fundo #649FBF com 20% de opacidade
              E os ícones de informações deve estar centralizados em suas respectivas áreas de steps
              E os ícones de informações só devem ter cores caso seja a pagina atual
              E a linha que informa nos icones de informações deve ter um espaçamento de 4px

        Cenário: Validação de quebra de layout com múltiplos usuários
            Dado que o usuário acessa a página inicial do sistema
              E existem mais de 3 usuários cadastrados no sistema
             Quando a página é carregada completamente
             Então a lista de usuários deve se manter ajustada dentro da coluna da direita
              E se houver mais de 5 usuários, deve ser exibido um menu de paginação para acessar os demais