const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const {interface, bytecode} = require("./../compile.js");
const web3 = new Web3(ganache.provider());

let accounts, inbox;
beforeEach(async () => {
    //Retrieve a list of all the accounts
    accounts = await web3.eth.getAccounts();
    
    // Deploy a contract on the first account in the list
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ["Heeey!!!"]})
    .send({from: accounts[0], gas: "1000000"})   
})

describe("Inbox", () => {
    it("deploys a contract", () => {
        console.log(inbox)
    })
})
