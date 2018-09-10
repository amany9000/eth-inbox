
// This is a file to deploy the compiled bytecode and interface at ./compile.sol
const hdWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new hdWalletProvider(
	"[Your account Mnemonic from metamask]",
	"https://rinkeby.infura.io/v3/a28609fdb48f468e9ca4607b4ff95140"  // This address will be generated through infura 
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await  web3.eth.getAccounts();
	
	console.log("Attempting to deploy from account ", accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: "0x" + bytecode, arguments: ["Hey"]})
		.send({gas: "1000000", from: accounts[0]});

	console.log("Bazinga!!!, Deployed at ",result.options.address);	
}  
deploy();
