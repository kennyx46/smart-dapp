pragma solidity ^0.4.23;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract MyToken is ERC20Mintable, Ownable {
    string public constant name = "My Token";
    string public constant symbol = "MTKN";
    uint8 public constant decimals = 18;
}