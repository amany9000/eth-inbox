const solc = require("solc");
const fs = require("fs");
const path = require("path");

const inboxPath = path.resolve(__dirname, "contracts", "inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

console.log(solc.compile(source, 1))