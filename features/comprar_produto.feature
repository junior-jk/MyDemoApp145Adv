Feature: Fluxo de Compra

    Scenario Outline: Comprar um produto com sucesso
        Given que estou na tela de Produtos
        When na "<rolagem>" seleciono o produto na posicao "<index>"
        Then verifico o "<produto>" e o "<preco>"
        When adiciono o produto no carrinho
        Then exibe o numero 1 no icone do carrinho
        When clico no carrinho
        Then verifico o "<produto>" e o "<preco>" no carrinho

        Examples:
        | produto                       | preco   | rolagem | index |
        | Sauce Labs Backpack           | $ 29.99 | 0       | 0     |
        | Sauce Labs Backpack (yellow)  | $ 29.99 | 1       | 1     |