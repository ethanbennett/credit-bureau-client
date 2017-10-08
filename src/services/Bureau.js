import { ethereumClient } from '../utils/blockchainConnection';
import {
  controllerContractABI,
  controllerContractAddress,
} from '../utils/controllerContract';
import {
  bureauContractABI,
  bureauContractAddress,
} from '../utils/bureauContract';

class Bureau {
  constructor() {
    this.state = {
      controllerContract: ethereumClient.eth
        .contract(controllerContractABI)
        .at(controllerContractAddress),
      bureauContract: ethereumClient.eth
        .contract(bureauContractABI)
        .at(bureauContractAddress),
    };
  }

  async getOrgList() {
    return await this.state.controllerContract.getAllOrgInfo();
  }

  async getOrgData(orgId) {
    return await this.state.controllerContract.getDetailedOrgInfo(orgId);
  }

  async getClientList() {
    return await this.state.controllerContract.getAllClientData();
  }

  async getClientListForOrg(orgId) {
    return await this.state.controllerContract.getBasicClientInfoForOrg(orgId);
  }

  async getClientData() {
    return await this.state.controllerContract.getDetailedClientInfo(clientId);
  }

  async getAllLoanData(orgOrClientAddress) {
    return await this.state.controllerContract.getAllLoanDataForAddresses(
      orgOrClientAddress
    );
  }

  async getProposals() {
    return await this.state.controllerContract.getAllProposalData();
  }
}

export default new Bureau();
