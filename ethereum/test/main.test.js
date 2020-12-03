const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();
const { expect, assert } = chai;
const { accounts, contract, web3 } = require('@openzeppelin/test-environment');
const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const Helpers = contract.fromArtifact('Helpers');
const Helpers = contract.fromArtifact('MainContract');
const [a_owner, a_player1, a_player2, a_referee, a_stranger, ...other_accounts] = accounts;

const zero = new BN(0);
const one = new BN(1);
const two = new BN(2);

describe('Main Contract', function() {});
