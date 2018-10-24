pragma solidity ^0.4.23;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/distribution/RefundableCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";
// import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/WhitelistedCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract MyToken is ERC20Mintable, Ownable {
    string public constant name = "My Token";
    string public constant symbol = "MTKN";
    uint8 public constant decimals = 18;
}

contract MyCrowdsale is CappedCrowdsale, RefundableCrowdsale, TimedCrowdsale, MintedCrowdsale {
    contract MyCrowdsale is CappedCrowdsale, RefundableCrowdsale, TimedCrowdsale, MintedCrowdsale {
    constructor(
        uint256 _openingTime,
        uint256 _closingTime,
        uint256 _rate,
        address _wallet,
        uint256 _cap,
        ERC20Mintable _token,
        uint256 _goal
    )
        public
        Crowdsale(_rate, _wallet, _token)
        CappedCrowdsale(_cap)
        TimedCrowdsale(_openingTime, _closingTime)
        RefundableCrowdsale(_goal)
    {
        // Это тут просто, чтобы показать, что можно сделать
        // Проверяем, что софткеп ниже хардкепа
        require(_goal <= _cap);
    }
}
