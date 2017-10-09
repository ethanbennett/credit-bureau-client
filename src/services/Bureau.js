import { controllerContract } from '../ethereum/controllerContract';
import { bureauContract } from '../ethereum/bureauContract';
import { orgContract } from '../ethereum/orgContract';

class Bureau {
  async getOrgList() {
    // Total successful loans (successful/total)
    return await bureauContract.getAllOrgInfo();
  }

  async getOrgData(orgId) {
    await controllerContract.getBasicOrgInfoById(orgId);
    return await controllerContract.getDetailedOrgInfoById(orgId);
  }

  // Need to get org address, that will come from getBasicOrgInfoById
  async getQuarterlyReport(orgId) {
    return await orgContract.getQuarterlyReportData();
  }

  async getClientList() {
    return await controllerContract.getAllClientIds();
  }

  async getClientListForOrg(orgId) {
    // returns "NAME-MM/DD/YYYY"
    return await orgContract.getClientInfoForOrg(orgId);
  }

  async getClientData(clientId) {
    return await controllerContract.getClientDetailsById(clientId);
  }

  async getAllLoanData(orgOrClientAddress) {
    // Get client address from getClientData(clientId)
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

  async createProposal(name, description) {
    return await controllerContract.addProposal(name, {
      gas: 4000000,
    });
  }
}

export default new Bureau();
