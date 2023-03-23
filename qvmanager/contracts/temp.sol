// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract QuadVote {
    struct Voting_Event {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }
    
    mapping(uint256 => Voting_Event) public voting_events;

    uint256 public numberOfVoting_Events = 0;
    // Code to create a Voting Event 
    function createVoting_Event(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public returns (uint256) {
        Voting_Event storage voting_event = voting_events[numberOfVoting_Events];

        require(voting_event.deadline < block.timestamp, "The deadline should be a date in the future.");

        voting_event.owner = _owner;
        voting_event.title = _title;
        voting_event.description = _description;
        voting_event.target = _target;
        voting_event.deadline = _deadline;
        voting_event.amountCollected = 0;
        voting_event.image = _image;

        numberOfVoting_Events++;

        return numberOfVoting_Events - 1;
    }

    function donateToVoting_Event(uint256 _id) public payable {
        uint256 amount = msg.value;

        Voting_Event storage voting_event = voting_events[_id];

        voting_event.donators.push(msg.sender);
        voting_event.donations.push(amount);

        (bool sent,) = payable(voting_event.owner).call{value: amount}("");

        if(sent) {
            voting_event.amountCollected = voting_event.amountCollected + amount;
        }
    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (voting_events[_id].donators, voting_events[_id].donations);
    }

    function getVoting_Events() public view returns (Voting_Event[] memory) {
        Voting_Event[] memory allVoting_Events = new Voting_Event[](numberOfVoting_Events);

        for(uint i = 0; i < numberOfVoting_Events; i++) {
            Voting_Event storage item = voting_events[i];

            allVoting_Events[i] = item;
        }

        return allVoting_Events;
    }
}