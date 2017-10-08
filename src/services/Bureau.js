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

  async getClientData(clientId) {
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

  async createClient(
    id,
    clientWallet,
    name,
    homeAddress,
    birthday,
    age,
    gender,
    education,
    householdSize,
    dependents,
    marritalStatus,
    phoneNumber
  ) {
    return await this.state.bureauContract.createClient(
      id,
      clientWallet,
      name,
      homeAddress,
      birthday,
      age,
      gender,
      education,
      householdSize,
      dependents,
      marritalStatus,
      phoneNumber,
      { gas: 4000000 }
    );
  }

  async createOrg(id, name, hqAddress, country, currency, orgWallet) {
    return await this.state.bureauContract.addOrgToBureau(
      id,
      name,
      hqAddress,
      country,
      currency,
      orgWallet,
      { gas: 4000000 }
    );
  }

  async increaseVote(proposalId) {
    return await this.state.controllerContract.increaseVote(proposalId, {
      gas: 4000000,
    });
  }

  async decreaseVote(proposalId) {
    return await this.state.controllerContract.decreaseVote(proposalId, {
      gas: 4000000,
    });
  }

  async createProposal(name, description) {
    return await this.state.bureauContract.createProposal(name, description, {
      gas: 4000000,
    });
  }
}

export default new Bureau();
