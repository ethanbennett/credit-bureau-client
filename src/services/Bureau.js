import { controllerContract } from '../ethereum/controllerContract';
import { bureauContract } from '../ethereum/bureauContract';

class Bureau {
  async getOrgList() {
    // Returns the following arrays:
    // Org ID
    // Org Name
    // Country
    // Number of clients
    // Total loans
    // Total successful loans (successful/total)
    return await bureauContract.getAllOrgInfo();
  }

  async getOrgData(orgId) {
    await controllerContract.getBasicOrgInfoById(orgId);
    return await controllerContract.getDetailedOrgInfoById(orgId);
  }

  // Need to get org address, that will come from getBasicOrgInfoById
  async getQuarterlyReport(orgId) {
    return await orgContract.getQuarterlyReportData()
  }

  async getClientList() {
    // returns "NAME-BIRTHDAY"
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
    // returns 3 arrays:
    // Name
    // Votes for
    // Votes against
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
    // bureauId is arbitrary and passed here as a param
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
