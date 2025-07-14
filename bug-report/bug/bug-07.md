Bug 07  - Ao inserir dados de funcionarios errados no campo de rg a aplicação aceita as informações

**Descrição:**  
Ao preencher o campo de rg com numeros a mais da mascara de rg a aplicação salva as informações sem verificar o dado

**Passos para reproduzir:**  
1. acessar o site
2. clicar no botão "Adicionar Funcionario"
3. inserir 1234567890112 no campo de rg
4. clicar no botão salvar

**Resultado esperado:**  
O site exibir um erro caso o usuário insira as informações que não estão de acordo com a regra de negocio

**Resultado atual:**  
As informações são salvas no banco de dados incorretamente


**Ambiente:**  
- Navegador:  Chrome 138
