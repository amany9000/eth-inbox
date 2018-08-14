
// Solidity Contract
pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    constructor(string initialMssg) public {
        message = initialMssg;
    }
    function setMssg(string newMssg) public returns (string){
        message = newMssg;
    } 
}
