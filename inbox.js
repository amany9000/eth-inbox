
const Web3 = require("web3");
const hdWalletProvider = require("truffle-hdwallet-provider");
const { interface, bytecode } = require("./compile");

const read = async () => {
	const provider = new hdWalletProvider(
		"[Your account Mnemonic from metamask]",
		"https://rinkeby.infura.io/v3/a28609fdb48f468e9ca4607b4ff95140"  // This address will be generated through infura 
	);
	
	const web3 = new Web3(provider);
	return await new web3.eth.Contract((JSON.parse(interface)), 
		"0xdf76FF6e414243Bb07fd02DbF6742bC9Ec02a398");
} 

module.exports = {read};
