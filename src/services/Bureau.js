import { controllerContract } from '../ethereum/controllerContract';
import { bureauContract } from '../ethereum/bureauContract';
import { orgContract } from '../ethereum/orgContract';

class Bureau {
  async getOrgList() {
    return await bureauContract.getAllOrgInfo();
  }

  async getOrgData(orgId) {
    const id = parseInt(orgId, 10);
    const firstResponse = await bureauContract.getOrgInfoById(id);
    const secondResponse = await controllerContract.getDetailedOrgInfoById(id);
    return [firstResponse, secondResponse];
  }

  async getQuarterlyReport(orgAddress) {
    return await orgContract(orgAddress).getQuarterlyReportData();
  }

  async getClientList() {
    return await controllerContract.getAllClientIds();
  }

  async getClientListForOrg(orgId) {
    return await controllerContract.getClientIdsForOrg(parseInt(orgId, 10));
  }

  async getClientData(clientId) {
    return await controllerContract.getClientDetailsById(clientId);
  }

  async getAllLoanData(orgOrClientAddress) {
    return await controllerContract.getAllLoanDataForAddresses(
      orgOrClientAddress
    );
  }

  async getProposals() {
    return await controllerContract.getBallotData();
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
    maritalStatus,
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
      maritalStatus,
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

  // proposalId is the index of a proposal from getProposalData
  async increaseVote(proposalId) {
    return await controllerContract.voteFor(proposalId, {
      gas: 4000000,
    });
  }

  async decreaseVote(proposalId) {
    return await controllerContract.voteAgainst(proposalId, {
      gas: 4000000,
    });
  }

  async createProposal(name) {
    return await controllerContract.addProposal(name, {
      gas: 4000000,
    });
  }
}

export default new Bureau();
