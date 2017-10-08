import { ethereumClient } from '../utils/blockchainConnection';

const controllerContractABI = [];

const controllerContractAddress = '';

export const controllerContract = ethereumClient.eth
  .contract(controllerContractABI)
  .at(controllerContractAddress);
