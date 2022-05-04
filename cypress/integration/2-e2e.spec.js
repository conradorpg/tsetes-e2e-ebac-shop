/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3964 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.plus').click().click().click().click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        
        
        cy.get('#billing_first_name').type(faker.name.firstName())
        cy.get('#billing_last_name').type(faker.name.lastName())
        cy.get('#billing_company').type(faker.name.jobTitle())
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Brasil{enter}')
        cy.get('#billing_address_1').type('Rua das Flores')
        cy.get('#billing_address_2').type('Teste')
        cy.get('#billing_city').type('Teste')
        cy.get('#select2-billing_state-container').click()
        cy.get('.select2-search__field').type('São Paulo{enter}')
        cy.get('#billing_postcode').type('01001000')
        cy.get('#billing_phone').type('44988776655')
        cy.get('#billing_email').type(faker.internet.email())
        cy.get('#createaccount').click()
        cy.get('#account_password').type('teste123')
        cy.get('#order_comments').type('Texto de teste texto de teste')
        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Seu pedido foi recebido')
    });


})