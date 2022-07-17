/* eslint-disable require-jsdoc */
const { Utils } = require("../../utils/utils");
const { sendTx } = require("wax-bot-lib");
const { setTxData } = require("../../helpers/helpers");

/* tx functions for situation*/
class Tx {
    constructor(wallet) {
        this.wallet = wallet;
        this.api = wallet.api;
        this.rpc = wallet.rpc;
    }

    /* general template for an action*/
    async mine() {
        const contract = {
            name: "galacticgame", // example
            action: "mine", // example
            params: { nm: this.wallet.executorAddress, ind: 0 }, // example
        };

        const txData = setTxData(this.wallet, contract);

        const [response, error] = await sendTx(this.wallet, txData);
        if (response) return;

        // handle errors
        if (error.includes("") == 1) {
            // call another transaction
        }

        if (error.includes("") == 1) {
            // call another transaction
        }

        if (error.includes("") == 1) {
            // call another transaction
        }

        if (error.includes("") == 1) {
            // call another transaction
        }
    }

    async login() {
        const contract = {
            name: "galacticgame", // example
            action: "login", // example
            params: { nm: this.wallet.executorAddress }, // example
        };

        const txData = setTxData(this.wallet, contract);
        const [response, error] = await sendTx(this.wallet, txData);
        if (response) return;

        // handle errors
        if (error.includes("") == 1) {
            // call another transaction
        }

        if (error.includes("") == 1) {
            // call another transaction
        }

        if (error.includes("") == 1) {
            // call another transaction
        }

        if (error.includes("") == 1) {
            // call another transaction
        }
    }
}

module.exports = { Tx };
