const { Wallet } = require("wax-bot-lib");
const { Miner } = require("./libs/classes/miner");
const { config } = require("../config/config");

const executorWallet = JSON.parse(process.argv[2]);
const coSignWallet = JSON.parse(process.argv[3]);
const lookUpTime = process.argv[4];

const wallet = new Wallet(executorWallet, coSignWallet, config.SERVER_ENDPOINT);
wallet.init();

const miner = new Miner(wallet, lookUpTime);
miner.init();
