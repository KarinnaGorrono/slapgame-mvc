import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";

//NOTE Draws money to the page from the proxystate money :D
function _draw() {
    document.getElementById('money').innerText = `Money: ${ProxyState.money}`

}

function _drawSnacks() {
    // document.getElementById('snacks').innerHTML = `
    // <h3>Snacks:</h3>
    // <button>${ProxyState.snacks[0].name} - $${ProxyState.snacks[0].price}</button>
    // <button>${ProxyState.snacks[1].name} - $${ProxyState.snacks[1].price}</button>
    // `
    // lazy choice to make it so i dont have to write 'ProxyState.snacks' every time
    const snacks = ProxyState.snacks
    // create a variable to hold all the strings
    let template = ''
    // itterate over the collection of data, and turn all into a single string
    snacks.forEach(snack => {
        template += `<button>${snack.name} - $${snack.price}</button>`
    })

    document.getElementById('snacks').innerHTML = template


}


export class SnackController {
    constructor() {
        // NOTE proxystate on, runs the draw function when proxystate money property changes
        ProxyState.on('money', _draw)
        _draw()
        _drawSnacks()
    }
    // NOTE user clicks button on index and runs this code, this triggers method in snack service
    addMoney() {
        snackService.addMoney()
        console.log('hello from controller')
    }
}