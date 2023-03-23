// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract QuadVote {
    struct Attestation{
        string attestation_id;
        address attestor;
        mapping(string => uint256) votes; // participant_id -> number of votes
    }

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
        uint256 startdate;
        mapping(address => string) participants; // user to participants mapping

        //data about the votes
        mapping(address => Attestation) total_votes;// map of address and all his votes 
    }

    mapping(address => uint256) public freezed_funds;
    mapping(uint256 => Voting_Event) public voting_events;

    uint256 public numberOfVoting_Events = 0;

    function compareStrings(string memory a, string memory b) public pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
        // Code to create a Voting Event 
    function createVoting_Event(
        string memory _title,
        string memory _description,
        string memory _image,
        string memory _event_id,
        uint256 _Pool_amount,
        uint256 _max_votes,
        uint256 _startdate,
        uint256 _deadline
    )
    public returns(string memory){
        Voting_Event storage voting_event = voting_events[numberOfVoting_Events];
        require(voting_event.deadline < block.timestamp, "The deadline should be a date in the future.");
        require(voting_event.startdate < block.timestamp, "The startdate should be a date in the future.");
        require(voting_event.deadline < voting_event.startdate, "The deadline should be greater than start date.");
        uint flag=0;
        for(uint i = 0; i < numberOfVoting_Events; i++) {
            if(compareStrings(voting_events[i].event_id, _event_id)){
                flag=1;
            }
            if(compareStrings(voting_events[i].title, _title)){
                flag=1;
            }
        }
        require(flag==1,"Given eventID already Exists");
        require(flag==2,"Given title already Exists");
        voting_event.event_id = _event_id;
        voting_event.title = _title;
        voting_event.description = _description;
        voting_event.image = _image;
        voting_event.Pool_amount = _Pool_amount;
        voting_event.deadline = _deadline;
        voting_event.startdate = _startdate;
        voting_event.max_votes=_max_votes;
        voting_event.status= 1; // default set to upcomming

        numberOfVoting_Events;
        return voting_event.event_id;
    }
    
}