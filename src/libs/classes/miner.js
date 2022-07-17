/* eslint-disable require-jsdoc */

const { Tx } = require("./transactions/tx");
const { Utils } = require("../utils/utils");

/* class that will execute the code*/
class Galaxy {
    constructor(wallet, lookUpTime) {
        this.wallet = wallet;
        this.lookUpTime = lookUpTime;

        this.tx = new Tx(wallet);
    }

    async work() {
        console.log("Good News");
        while (true) {
            await this.tx.mine();
            await Utils.sleep(this.lookUpTime);
        }
    }
}

module.exports = { Galaxy };
