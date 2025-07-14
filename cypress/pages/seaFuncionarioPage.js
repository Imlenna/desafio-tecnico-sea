class AdicionaFuncionarioPage {

    getAddButton() {
        return cy.contains('+ Adicionar Funcionário').click();
    }

    getFuncionarioAtivo(){
        cy.get('.ant-switch-inner').click();
    }

    getName() {
        return cy.get('input[name="name"]');
    }

    getSelecionarSexo(valor) {
    return cy.get(`input[type="radio"][value="${valor}"]`).check().should('be.checked');
    }

    getSexoMasculino() {
    return cy.contains('.ant-radio-wrapper', 'Masculino')
    }

    getSexoFeminino(){
      return cy.contains('.ant-radio-wrapper', 'Feminino')
    }

    getCPF() {
        return cy.get('input[name="cpf"]');
    }

    getBirthday() {
        return cy.get('input[name="birthDay"]');
    }

    getBirthdayWrong() {
        return cy.get('input[name="birthDay"]').invoke('attr', 'type', 'text');
    }

    getRG() {
        return cy.get('input[name="rg"]');
    }
    getCargoDropdown() {
        return cy.contains('label', 'Cargo').parent().find('.ant-select');
    }
    openCargoDropdown() {
        this.getCargoDropdown().click();
    }
    selectCargoOption(optionText) {
        cy.get('.ant-select-dropdown')
            .should('be.visible')
            .contains('.ant-select-item-option', optionText)
            .click({force: true});
    }

    getEpiQuestion() {
        return cy.contains('Quais EPIs o trabalhador usa na atividade?');
    }

    getAtividadeDropdown() {
        return cy.contains('label', 'Selecione a atividade:').parent().find('.ant-select');
    }

    openAtividadeDropdown() {
        this.getAtividadeDropdown().click();
    }

    selectAtividadeOption(optionText) {
        cy.get('.ant-select-dropdown')
            .should('be.visible')
            .contains('.ant-select-item-option',optionText)
            .click({force: true});
    }
    getSelecioneEpi() {
        return cy.contains('Selecione o EPI:');
    }

    getNumeroCa() {
        return cy.get(':nth-child(2) > .c-jzRMpM');
    }

    getAdicionarOutraAtividade() {
        return cy.contains('Adicionar outra atividade');
    }

    getAddEPI(){
        return cy.get('.addEPI').click();
    }

    getAtestadoSaude() {
        return cy.contains('Adicione Atestado de Saúde Ocupacional (opcional):');
    }

    getFileInput() {
        return cy.get('input[type="file"]');
    }

    getSalvarButton() {
        return cy.contains('Salvar');
    }

    validaVisibilidadeForm() {
        this.getName().should('be.visible').should('be.enabled');
        this.getCPF().should('be.visible');
        this.getSexoMasculino().should('be.visible');
        this.getSexoFeminino().should('be.visible');
        this.getBirthday().should('be.visible');
        this.getRG().should('be.visible');
        this.getCargoDropdown().should('be.visible');
        this.getEpiQuestion().should('be.visible');
        this.getAtividadeDropdown().should('be.visible');
        this.getSelecioneEpi().should('be.visible');
        this.getNumeroCa().should('be.visible');
        this.getAdicionarOutraAtividade().should('be.visible');
        this.getAtestadoSaude().should('be.visible');
        this.getFileInput().should('be.visible');
        this.getSalvarButton().should('be.visible');
    }

}
export default AdicionaFuncionarioPage;