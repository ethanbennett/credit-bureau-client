import { ethereumClient } from '../utils/blockchainConnection';
import {
  controllerContractABI,
  controllerContractAddress,
} from '../utils/controllerContract';

class Bureau {
  constructor() {
    this.state = {
      controllerContract: ethereumClient.eth
        .contract(controllerContractABI)
        .at(controllerContractAddress),
    };
  }

  async getOrgList() {
    return await this.state.controllerContract.getOrgList();
  }
}
