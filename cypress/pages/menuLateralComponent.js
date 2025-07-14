class MenuLateral{
    getPrimeiroBotao(){
        return cy.get('.c-juSleU > :nth-child(1)').click()
    }
    getSegundoBotao(){
        cy.get('.active').click()
    }
    getTerceiroBotao(){
        return cy.get('.c-juSleU > :nth-child(3)').click()
    }
    getQuartoBotao(){
        return cy.get('.c-juSleU > :nth-child(4)').click()
    }
    getQuintoBotao(){
        return cy.get('.c-juSleU > :nth-child(5)').click()
    }
    getSextoBotao(){
        return cy.get('.c-juSleU > :nth-child(6)').click()
    }
}
export default MenuLateral;