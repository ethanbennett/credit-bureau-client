import { ethereumClient } from './connection';

const orgContractABI = [
  {
    constant: true,
    inputs: [],
    name: 'getClientInfoForOrg',
    outputs: [
      {
        name: '',
        type: 'bytes32[]',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'orgWallet',
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
    name: 'orgName',
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
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'quarterlyReportList',
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
    name: 'orgId',
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
    name: 'bureauAddress',
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
    name: 'getAllClientData',
    outputs: [
      {
        name: '',
        type: 'address[]',
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
    constant: true,
    inputs: [
      {
        name: '_clientId',
        type: 'bytes32',
      },
    ],
    name: 'getLoansByClientId',
    outputs: [
      {
        name: '',
        type: 'address[]',
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
    name: 'quarterlyReportHistory',
    outputs: [
      {
        name: 'grossLoanPortfolio',
        type: 'uint256',
      },
      {
        name: 'numOfActiveBorrowers',
        type: 'uint256',
      },
      {
        name: 'grossDepositsPortfolio',
        type: 'uint256',
      },
      {
        name: 'numOfDepositors',
        type: 'uint256',
      },
      {
        name: 'totalSuccess',
        type: 'uint256',
      },
      {
        name: 'totalPayments',
        type: 'uint256',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'orgCurrency',
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
    constant: false,
    inputs: [
      {
        name: '_loanAddress',
        type: 'address',
      },
      {
        name: '_paymentMade',
        type: 'bool',
      },
    ],
    name: 'updateLoanByAddress',
    outputs: [],
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
    name: 'loanAddresses',
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
    constant: false,
    inputs: [],
    name: 'getLoanAddresses',
    outputs: [
      {
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'grossClientDeposits',
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
    name: 'orgHqAddress',
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
    name: 'getGeneralInfo',
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
    inputs: [],
    name: 'totalClientPayments',
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
    name: 'orgCountry',
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
    name: 'getQuarterlyReportData',
    outputs: [
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
        name: '_amount',
        type: 'uint256',
      },
      {
        name: '_type',
        type: 'bool',
      },
    ],
    name: 'updateGrossDeposits',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'numberOfClients',
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
    constant: false,
    inputs: [
      {
        name: '_id',
        type: 'uint256',
      },
      {
        name: '_grossLoanPortfolio',
        type: 'uint256',
      },
      {
        name: '_numOfActiveBorrowers',
        type: 'uint256',
      },
      {
        name: '_grossDepositsPortfolio',
        type: 'uint256',
      },
      {
        name: '_numOfDepositors',
        type: 'uint256',
      },
    ],
    name: 'addQuarterlyReport',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_clientId',
        type: 'bytes32',
      },
      {
        name: '_amount',
        type: 'uint256',
      },
      {
        name: '_durationInMonths',
        type: 'uint256',
      },
      {
        name: '_monthlyPayment',
        type: 'uint256',
      },
      {
        name: '_startDate',
        type: 'bytes32',
      },
    ],
    name: 'createLoan',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSuccessfulClientPayments',
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
    name: 'getDetailedInfo',
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
    inputs: [],
    name: 'getNumberOfQrs',
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
    inputs: [
      {
        name: '_id',
        type: 'bytes32',
      },
    ],
    name: 'getClientPersonalInfoById',
    outputs: [
      {
        name: '',
        type: 'address',
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
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint8',
      },
      {
        name: '',
        type: 'uint8',
      },
      {
        name: '',
        type: 'uint8',
      },
      {
        name: '',
        type: 'uint8',
      },
      {
        name: '',
        type: 'bool',
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
    inputs: [],
    name: 'getNumberOfLoans',
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
    payable: false,
    type: 'constructor',
  },
];

export function orgContract(orgAddress) {
  return ethereumClient.eth.contract(orgContractABI).at(orgAddress);
}
