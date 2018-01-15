import Web3 from 'web3';

const { REACT_APP_ETH_URL, REACT_APP_DEFAULT_ACCOUNT } = process.env;

console.log(REACT_APP_ETH_URL);
export const ethereumClient = new Web3(
  new Web3.providers.HttpProvider(REACT_APP_ETH_URL)
);

ethereumClient.eth.defaultAccount = REACT_APP_DEFAULT_ACCOUNT;
