import { ethereumClient } from './connection';

const bureauContractABI = [
  {
    constant: true,
    inputs: [],
    name: 'getAllOrgInfo',
    outputs: [
      {
        name: '',
        type: 'uint256[]',
      },
      {
        name: '',
        type: 'bytes32[]',
      },
      {
        name: '',
        type: 'bytes32[]',
      },
      {
        name: '',
        type: 'uint256[]',
      },
      {
        name: '',
        type: 'uint256[]',
      },
      {
        name: '',
        type: 'uint256[]',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_id',
        type: 'uint256',
      },
      {
        name: '_name',
        type: 'bytes32',
      },
      {
        name: '_hqAddress',
        type: 'bytes32',
      },
      {
        name: '_country',
        type: 'bytes32',
      },
      {
        name: '_currency',
        type: 'bytes32',
      },
      {
        name: '_orgWallet',
        type: 'address',
      },
    ],
    name: 'addOrgToBureau',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'getOrgInfoById',
    outputs: [
      {
        name: '',
        type: 'address',
      },
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'bytes32',
      },
      {
        name: '',
        type: 'bytes32',
      },
      {
        name: '',
        type: 'bytes32',
      },
      {
        name: '',
        type: 'bytes32',
      },
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'getOrgDetailsById',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'getOrgAddressById',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'clientList',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_id',
        type: 'bytes32',
      },
    ],
    name: 'findClientAddress',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'clientIds',
    outputs: [
      {
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'ownerAddress',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'ballotAddresses',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'orgList',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getNumberOfClients',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'ballotAddress',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_id',
        type: 'bytes32',
      },
      {
        name: '_clientWallet',
        type: 'address',
      },
      {
        name: '_name',
        type: 'bytes32',
      },
      {
        name: '_homeAddress',
        type: 'bytes32',
      },
      {
        name: '_birthday',
        type: 'bytes32',
      },
      {
        name: '_age',
        type: 'uint256',
      },
      {
        name: '_gender',
        type: 'uint8',
      },
      {
        name: '_education',
        type: 'uint8',
      },
      {
        name: '_householdSize',
        type: 'uint8',
      },
      {
        name: '_dependents',
        type: 'uint8',
      },
      {
        name: '_married',
        type: 'bool',
      },
      {
        name: '_phoneNumber',
        type: 'uint256',
      },
    ],
    name: 'createClient',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    inputs: [],
    payable: false,
    type: 'constructor',
  },
];

const bureauContractAddress = '0x84ae582744c77706431dfa714da7c1845dd0643c';

export const bureauContract = ethereumClient.eth
  .contract(bureauContractABI)
  .at(bureauContractAddress);
