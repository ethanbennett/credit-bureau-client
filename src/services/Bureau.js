import { controllerContract } from '../utils/controllerContract';
import { bureauContract } from '../utils/bureauContract';

class Bureau {
  async getOrgList() {
    return await controllerContract.getAllOrgInfo();
  }

  async getOrgData(orgId) {
    return await controllerContract.getDetailedOrgInfo(orgId);
  }

  async getClientList() {
    return await controllerContract.getAllClientData();
  }

  async getClientListForOrg(orgId) {
    return await controllerContract.getBasicClientInfoForOrg(orgId);
  }

  async getClientData(clientId) {
    return await controllerContract.getDetailedClientInfo(clientId);
  }

  async getAllLoanData(orgOrClientAddress) {
    return await controllerContract.getAllLoanDataForAddresses(
      orgOrClientAddress
    );
  }

  async getProposals() {
    return await controllerContract.getAllProposalData();
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
    return await bureauContract.createClient(
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
    return await bureauContract.addOrgToBureau(
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
    return await controllerContract.increaseVote(proposalId, {
      gas: 4000000,
    });
  }

  async decreaseVote(proposalId) {
    return await controllerContract.decreaseVote(proposalId, {
      gas: 4000000,
    });
  }

  async createProposal(name, description) {
    return await bureauContract.createProposal(name, description, {
      gas: 4000000,
    });
  }
}

export default new Bureau();
