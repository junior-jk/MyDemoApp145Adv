const BasePage = require('./base.page')

class CartPage extends BasePage {

    get titulo_produto(){
        return $('id=com.saucelabs.mydemoapp.android:id/titleTV')
    }

    get preco_produto(){
        return $('id=com.saucelabs.mydemoapp.android:id/priceTV')
    }

}

module.exports = new CartPage()