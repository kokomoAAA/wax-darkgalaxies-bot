/* eslint-disable require-jsdoc */

const { Tx } = require("./transactions/tx");
const { Utils } = require("../utils/utils");

/* class that will execute the code*/
class Miner {
    constructor(wallet) {
        this.wallet = wallet;
        this.tx = new Tx(wallet);
    }

    async init() {
        console.log("working");

        while (true) {
            await this.work();
        }
    }

    async work() {
        console.log("Good News");
        await this.tx.mine();
        await Utils.sleep(1000);
    }
}

module.exports = { Miner };
