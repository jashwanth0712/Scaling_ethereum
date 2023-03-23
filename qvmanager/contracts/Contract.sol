// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract QuadVote {
    struct Voting_Event {
        // access controls 
        address owner;
        address[] organizers;
        address[] volunteers;
        address[] voters;
        mapping(address => string[]) denied_access; // here user can mention all the votings that he is denied to vote
        
        // details about the voting event
        string event_id;
        string title;
        string description;
        string image;
        uint256 Pool_amount;
        uint256 max_votes;
        uint256 status; //1. upcomming , 2. ongoing , 3. ended 
        uint256 deadline;
        mapping(address => string[]) participants; // user to participants mapping

        //data about the votes
        mapping(address => mapping(string => uint256)) votes;// map of address and all his votes 
    }

 
    mapping(address => uint256) public freezed_funds;
    mapping(uint256 => Voting_Event) public voting_events;
}