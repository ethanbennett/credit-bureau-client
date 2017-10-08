import { ethereumClient } from './connection';

const orgContractABI = [];

export function orgContract(orgAddress) {
  return ethereumClient.eth
    .contract(orgContractABI)
    .at(orgAddress)
}