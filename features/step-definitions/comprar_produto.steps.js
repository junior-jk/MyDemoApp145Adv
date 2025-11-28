import { Given, When, Then, After } from "@wdio/cucumber-framework"
import ProductPage from "../../pages/products.page"
import ProductDetailPage from "../../pages/product_details.page"
import CartPage from "../../pages/cart.page"

After(async () => {
    await driver.reloadSession()
    await driver.pause(1000)
})

Given("que estou na tela de Produtos", async() => {
    // await expect(ProductPage.logo).toBeDisplayed() // está sendo exibido
    // await expect(ProductPage.titulo_produto).toBeDisplayed()
    // await expect(ProductPage.titulo_produto).toHaveText('Products')

})

When("na {string} seleciono o produto na posicao {string}", async(rolagem, index) => {
    await ProductPage.arrasta_para_cima(rolagem)
    await ProductPage.clicar_no_produto(index)
})

Then("verifico o {string} e o {string}", async(produto, preco) => {
    await expect(ProductDetailPage.titulo_produto).toHaveText(produto)
    await expect(ProductDetailPage.preco_produto).toHaveText(preco)
})

When("adiciono o produto no carrinho", async() => {
    await ProductDetailPage.arrasta_para_cima(1)
    await ProductDetailPage.botao_adicionar_no_carrinho.click()
})

Then("exibe o numero 1 no icone do carrinho", async() => {
    await expect(ProductDetailPage.icone_carrinho).toHaveText('1')
})

When("clico no carrinho", async() => {
    await ProductDetailPage.icone_carrinho.click()
})

Then("verifico o {string} e o {string} no carrinho", async(produto, preco) => {
    await expect(CartPage.titulo_produto).toHaveText(produto)
    await expect(CartPage.preco_produto).toHaveText(preco)
})