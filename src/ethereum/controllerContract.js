import { ethereumClient } from './connection';

const controllerContractABI = [];

const controllerContractAddress = '';

export const controllerContract = ethereumClient.eth
  .contract(controllerContractABI)
  .at(controllerContractAddress);
