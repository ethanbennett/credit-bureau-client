import { ethereumClient } from '../utils/blockchainConnection';

const bureauContractABI = [];

const bureauContractAddress = '';

export const bureauContract = ethereumClient.eth
  .contract(bureauContractABI)
  .at(bureauContractAddress);
