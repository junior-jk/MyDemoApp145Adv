const BasePage = require('./base.page')

class ProductsPage extends BasePage {

    get logo() { // seletor do logo MyDemoApp
        return $('~App logo and name')
    }

    get titulo_secao() {
        return $('~title')
    }

    async clicar_no_produto(index){
        await $(`android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(${index})`).click()
    }

}

module.exports = new ProductsPage()