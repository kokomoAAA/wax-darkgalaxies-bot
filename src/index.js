const { Wallet } = require("wax-bot-lib");
const { Galaxy } = require("./libs/classes/miner");
const { config } = require("../config/config");

const executorWallet = {
    address: process.env.ADDRESS,
    private_key: process.env.PRIVATE_KEY,
};

const coSignWallet = {}; // no cosign needed
const lookUpTime = 1000; // example

const wallet = new Wallet(config.SERVER_ENDPOINT, executorWallet, coSignWallet);
wallet.init();

const miner = new Galaxy(wallet, lookUpTime);
miner.work();
