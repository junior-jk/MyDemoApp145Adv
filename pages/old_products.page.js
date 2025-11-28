class ProductsPage {

    async selecionarProduto(produto) {

        // Ler e Selecionar todos os cartões de produto (productIV)
        const cartoes = await $$(
            '-android uiautomator',
            'new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV")'  
        )

        // Ler cada cartao dentro do conjunto de cartoes
        // E selecionar aquele que tiver o nome do produto desejado

        for(let cartao of cartoes){
            // Sobe um nível no elemento (pegue o cartão inteiro)
            let card = await cartao.$('..')

            // Dentro do card/cartao, pega o nome do produto
            let nome_produto = await card.$(
                '-android uiautomator',
                //'new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productTV")'
                `new UiSelector().text("${produto}")`
            )

            let texto_nome_produto = await nome_produto.getText()

            // Compara se é o nome do produto desejado
            if (texto_nome_produto == produto ) {
                await cartao.click() // Se é, clica nele
                return // sai do for após encontrar o produto desejado
            }

        }
    }


} // UI Automator Viewer --> Android Studio