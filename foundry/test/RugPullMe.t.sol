// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {RugPullMe} from "../src/RugPullMe.sol";

contract RugPullMeTest is Test {
    RugPullMe public rugPullMe;

    function setUp() public {
        rugPullMe = new RugPullMe();
    }

    function testSymbol() public view {
        assertEq(rugPullMe.symbol(), "RUG");
    }
}
