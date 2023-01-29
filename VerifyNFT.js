import web3 from './web3';
 
const contract = new web3.eth.Contract(ABI, address);
 
const nft = await contract.methods.tokenOfOwnerByIndex(owner, index).call();
console.log(nft);
