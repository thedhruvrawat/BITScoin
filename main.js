const { Blockchain, Transaction } = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('d6f32a385ffaf39ce767a2dc001cc8602fd0e3d48488ab9501c755bded9c268a');
const myWalletAddress = myKey.getPublic('hex');

let BITScoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
BITScoin.addTransaction(tx1);

console.log('\nStarting the miner......');
BITScoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Dhruv is ', BITScoin.getBalanceOfAddress(myWalletAddress));