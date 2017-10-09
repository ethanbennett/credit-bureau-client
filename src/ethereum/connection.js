import Web3 from 'web3';

export const ethereumClient = new Web3(
  new Web3.providers.HttpProvider('http://37d3d7e0.ngrok.io')
);

ethereumClient.eth.defaultAccount = ethereumClient.eth.accounts[0];
