Bug 08 - Ao inserir dados de funcionarios errados no campo de data a aplicação aceita as informações

**Descrição:**  
Ao preencher o campo de data com valores nulos na mascara de data a aplicação salva as informações sem verificar o dado

**Passos para reproduzir:**  
1. acessar o site
2. clicar no botão "Adicionar Funcionario"
3. inserir 00-00-0000 no campo de data
4. clicar no botão salvar

**Resultado esperado:**  
O site exibir um erro caso o usuário insira as informações de data não estejam corretas

**Resultado atual:**  
As informações são salvas no banco de dados incorretamente


**Ambiente:**  
- Navegador:  Chrome 138
