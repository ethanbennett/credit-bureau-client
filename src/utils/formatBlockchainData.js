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
    const splitData = clientInfo.split('-');

    return {
      name: splitData[0],
      birthday: splitData[1],
    };
  });
}
