module.exports = class BasePage {
    async arrasta_para_cima(rolagem) {
        for (let i = 0; i < rolagem; i++){ 
           await driver.action('pointer')
               .move( { duration: 0, x: 500, y: 1800 } )
               .down( { button: 0} )
               .move( { duration: 1000, x: 500, y: 200 } )
               .up(   { button: 0 } )
               .perform()

            await driver.pause(500)
        }  
    }

}