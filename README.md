# eth-inbox
Basic message inbox on Ethereum.

## To Run 
* Clone the repository.  
 ``` cd eth-inbox```
* Inlucde the dependecies - 
``` node
npm install
```
* To deploy - 
``` node
node deploy.js
```

## To check the smart contract 
* It is deployed on Ethereum's Rinkeby Test Network on the address - '0xdf76FF6e414243Bb07fd02DbF6742bC9Ec02a398'.
* You can paste the smart contract <a href="http://remix.ethereum.org">here</a>.
* Compile and set the environment to "Injected Web3".
* Use the Test network address given above and click at "At Address".   
* Then you can generate transaction to change the message by entering a new message string and click "transact" (after getting ether for the test network  <a href = "https://www.rinkeby.io/#faucet" >here</a>).

## Note
* To deploy your own smart contract, first generate an API key at <a href = https://infura.io/>infura</a> 
* To check all the transaction of my deployed contract, check <a href = https://rinkeby.etherscan.io/address/0xdf76ff6e414243bb07fd02dbf6742bc9ec02a398>this</a>.

## To test
* Run - 
``` node 
npm test
```
* Testing is done through mocha and assert library.