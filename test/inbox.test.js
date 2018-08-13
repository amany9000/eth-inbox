const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require("./../compile.js");

let accounts, inbox;
beforeEach(async () => {
    //Retrieve a list of all the accounts
    accounts = await web3.eth.getAccounts();
    
    // Deploy a contract on the first account in the list
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ["Heeey!!!"]})
    .send({from: accounts[0], gas: "1000000"})   

    inbox.setProvider(provider);
})

describe("Inbox", () => {
    
    it("deploys a contract", () => {
        assert.ok(inbox.options.address);
    });
    
    it("retrive message", async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message,"Heeey!!!");
    });

    it("should change the message", async () => {
        await inbox.methods.setMssg("byeeeee").send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message,"byeeeee");
    });
})
