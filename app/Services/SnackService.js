import { ProxyState } from "../AppState.js";

class SnackService {
    // NOTE triggered from controller adds a quarter to the appstate money property
    addMoney() {
        ProxyState.money += 0.25

        console.log(ProxyState.money)
    }
}

export const snackService = new SnackService()