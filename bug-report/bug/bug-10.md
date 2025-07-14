Bug 010  - Ao inserir dados de script nos campos do formulario está sendo aceito

**Descrição:**  
Ao preencher o campo de com valores de script/tags html a aplicação está aceitando os valores e salvando

**Passos para reproduzir:**  
1. acessar o site
2. clicar no botão "Adicionar Funcionario"
3. inserir <script>alert('XSS')</script> em qualquer campo de input
4. clicar no botão salvar

**Resultado esperado:**  
É esperado que o backend implemente validação ou sanitização para evitar riscos em outros contextos.

**Resultado atual:**  
As informações são salvas no banco de dados incorretamente


**Ambiente:**  
- Navegador:  Chrome 138
