import { ethereumClient } from './connection';

const controllerContractABI = [
  {
    constant: false,
    inputs: [{ name: '_propName', type: 'bytes32' }],
    name: 'addProposal',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'bureauAddress',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getBallotData',
    outputs: [
      { name: '', type: 'bytes32[]' },
      { name: '', type: 'uint256[]' },
      { name: '', type: 'uint256[]' },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_orgId', type: 'uint256' }],
    name: 'getBasicOrgInfoById',
    outputs: [
      { name: '', type: 'address' },
      { name: '', type: 'uint256' },
      { name: '', type: 'bytes32' },
      { name: '', type: 'bytes32' },
      { name: '', type: 'bytes32' },
      { name: '', type: 'bytes32' },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getAllClientIds',
    outputs: [{ name: '', type: 'bytes32[]' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_proposalId', type: 'uint256' }],
    name: 'voteAgainst',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_orgId', type: 'uint256' }],
    name: 'getClientIdsForOrg',
    outputs: [{ name: '', type: 'bytes32[]' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_proposalId', type: 'uint256' }],
    name: 'voteFor',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_orgOrClientAddress', type: 'address' }],
    name: 'getAllLoanDataForAddresses',
    outputs: [
      { name: '', type: 'uint256[]' },
      { name: '', type: 'uint256[]' },
      { name: '', type: 'bytes32[]' },
      { name: '', type: 'bytes32[]' },
      { name: '', type: 'uint256[]' },
      { name: '', type: 'uint256[]' },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_clientId', type: 'bytes32' }],
    name: 'getClientDetailsById',
    outputs: [
      { name: '', type: 'bytes32' },
      { name: '', type: 'address' },
      { name: '', type: 'bytes32' },
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
      { name: '', type: 'bool' },
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_orgId', type: 'uint256' }],
    name: 'getDetailedOrgInfoById',
    outputs: [
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
    ],
    payable: false,
    type: 'function',
  },
  {
    inputs: [{ name: '_bureauAddress', type: 'address' }],
    payable: false,
    type: 'constructor',
  },
  { payable: true, type: 'fallback' },
];

const controllerContractAddress = '0x488d878ea880ae109b276c622b86a4c438ffe865';

export const controllerContract = ethereumClient.eth
  .contract(controllerContractABI)
  .at(controllerContractAddress);
