
// This is a file to compile the code at ./contracts/inbox.sol
const solc = require("solc");
const fs = require("fs");
const path = require("path");

const inboxPath = path.resolve(__dirname, "contracts", "inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Inbox"]