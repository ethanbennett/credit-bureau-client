import { ethereumClient } from '../ethereum/connection';

export function formatBasicOrgObjects(blockchainResponse) {
  const orgId = blockchainResponse[0];
  const orgName = blockchainResponse[1];
  const country = blockchainResponse[2];
  const numberOfClients = blockchainResponse[3];
  const totalLoans = blockchainResponse[4];
  const totalSuccessfulLoans = blockchainResponse[5];

  return orgId.map((id, i) => {
    return {
      orgId: id,
      orgName: ethereumClient.toAscii(orgName[i]),
      country: ethereumClient.toAscii(country[i]),
      numberOfClients: numberOfClients[i],
      totalLoans: totalLoans[i],
      totalSuccessfulLoans: totalSuccessfulLoans[i],
    };
  });
}

export function formatProposalObjects(blockchainResponse) {
  const names = blockchainResponse[0];
  const votesFor = blockchainResponse[1];
  const votesAgainst = blockchainResponse[2];

  return names.map((name, i) => {
    return {
      name: name,
      votesFor: votesFor[i],
      votesAgainst: votesAgainst[i],
    };
  });
}

export function formatClientObjects(blockchainResponse) {
  return blockchainResponse.map((clientInfo, i) => {
    const splitData = ethereumClient.toAscii(clientInfo).split('-');

    return {
      id: ethereumClient.toAscii(clientInfo),
      name: splitData[0],
      birthday: splitData[1],
    };
  });
}

export function formatOrgDetails(blockchainResponse) {
  const firstResponse = blockchainResponse[0];
  const secondResponse = blockchainResponse[1];

  return {
    orgId: firstResponse[1],
    name: ethereumClient.toAscii(firstResponse[2]),
    country: ethereumClient.toAscii(firstResponse[4]),
    currency: ethereumClient.toAscii(firstResponse[5]),
    walletAddress: firstResponse[0],
    numberOfClients: secondResponse[0],
    grossDeposits: secondResponse[1],
    totalSuccessfulPayments: secondResponse[2],
    totalPayments: secondResponse[3],
  };
}

export function formatClientDetails(blockchainResponse) {
  const splitData = ethereumClient.toAscii(blockchainResponse[0]).split('-');

  return {
    id: ethereumClient.toAscii(blockchainResponse[0]),
    contractAddress: blockchainResponse[1],
    name: splitData[0],
    birthday: splitData[1],
    homeAddress: ethereumClient.toAscii(blockchainResponse[2]),
    gender: blockchainResponse[3],
    phoneNumber: blockchainResponse[4],
    married: blockchainResponse[5],
    numberOfPayments: blockchainResponse[6],
    successfulPayments: blockchainResponse[7],
    totalDeposits: blockchainResponse[8],
  };
}
