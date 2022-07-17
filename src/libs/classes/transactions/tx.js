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
            name: "darkminingsc", // example
            action: "mine", // example
            params: { account: this.wallet.executorAddress, deck_id: 1 }, // example
        };

        const [response, error] = await sendTx(this.wallet, contract);
        if (response) return;
    }
}

module.exports = { Tx };
