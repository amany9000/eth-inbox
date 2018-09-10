
// This file is a demo of an endpoint retriving and adding data 
const Web3 = require("web3");
const hdWalletProvider = require("truffle-hdwallet-provider");
const {read} = require("./inbox.js");

const provider = new hdWalletProvider(
	"[Your account Mnemonic from metamask]",
	"https://rinkeby.infura.io/v3/a28609fdb48f468e9ca4607b4ff95140"  // This address will be generated through infura 
);

const web3 = new Web3(provider);

read().then( async (inbox) => {
	const accounts = await  web3.eth.getAccounts();
	console.log(accounts[0])
	//await inbox.methods.setMssg("Hello UK").send({from:accounts[0], gas: 1000000});
	console.log(await inbox.methods.message().call())	
});
