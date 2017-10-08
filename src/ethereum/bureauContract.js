import { ethereumClient } from './connection';

const bureauContractABI = [];

const bureauContractAddress = '';

export const bureauContract = ethereumClient.eth
  .contract(bureauContractABI)
  .at(bureauContractAddress);
