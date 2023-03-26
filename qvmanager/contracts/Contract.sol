// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

library Uint256 {
    function parse(string memory _value) internal pure returns (uint256) {
        bytes memory _bytesValue = bytes(_value);
        uint256 _number = 0;
        for (uint256 i = 0; i < _bytesValue.length; i++) {
            uint256 _digit = uint256(uint8(_bytesValue[i]));
            require(_digit >= 48 && _digit <= 57, "Invalid digit");
            _number = _number * 10 + (_digit - 48);
        }
        return _number;
    }
}

contract QuadVote {
     function convertStringToUint256(string memory _value) public pure returns (uint256) {
        return Uint256.parse(_value);
    }
    struct Attestation{
        string attestation_id;
        address attestor;
        string event_id;
        string[] voter_participant_id ;
        uint256[] number_of_votes;

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
        uint256 no_of_participants;
        mapping(address => string) participants; // user to participants mapping from addr to participate id

        //data about the votes
        mapping(address => Attestation) total_votes;// map of address and all his votes 
        string voted_from;
        string voted_to;
        uint56  number_of_votes;
    }

    mapping(address => uint256) public freezed_funds;
    mapping(uint256 => Voting_Event) public voting_events;

    uint256 public numberOfVoting_Events = 0;

    
    function compareStrings(string memory a, string memory b) public pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
    // function to create a Voting Event 
    function createVoting_Event(
        address _owner,
        string memory _title,
        string memory _description,
        string memory _image,
        string memory _event_id,
        uint256 _Pool_amount,
        uint256 _max_votes
    )
    public returns(string memory){
        Voting_Event storage voting_event = voting_events[numberOfVoting_Events];
        uint flag=0;
        for(uint i = 0; i < numberOfVoting_Events; i++) {
            if(compareStrings(voting_events[i].event_id, _event_id)){
                flag=1;
            }
            if(compareStrings(voting_events[i].title, _title)){
                flag=1;
            }
        }
        flag=0;
        voting_event.owner=_owner;
        voting_event.event_id = _event_id;
        voting_event.title = _title;
        voting_event.description = _description;
        voting_event.image = _image;
        voting_event.Pool_amount = _Pool_amount;
        voting_event.max_votes=_max_votes;
        voting_event.status= 1; // default set to upcomming

        numberOfVoting_Events++;
        return voting_event.event_id;
    }

    //function to add participants
    function add_participant(// particpant refers to the candidate or the project that is up for voting, we only store participant id in the smart contract
        string memory _event_id,
        string memory _participant_id,
        address  _participant_address,
        string[] memory _denied_voting_access
    )
    public returns(string memory){
        for(uint i = 0; i < numberOfVoting_Events; i++) {
            if(compareStrings(voting_events[i].event_id,_event_id)){
                //when the required event is found
                voting_events[i].participants[ _participant_address]=_participant_id;
                voting_events[i].denied_access[_participant_address]=_denied_voting_access;
                voting_events[i].no_of_participants++;
            }
        }
        return "done";
    }

  function add_attestation(
        string memory _attestation_id,
        string memory _event_id,
        address _attestor,
        string memory _participant_voted ,
        string memory  _no_votes_votes_to_participant
    )
    public returns(string memory){
        Attestation memory newAttestation;
        newAttestation.attestation_id=_attestation_id;
        newAttestation.event_id=_event_id;
        newAttestation.attestor=_attestor;
        newAttestation.voter_participant_id[newAttestation.voter_participant_id.length]=_participant_voted;
        newAttestation.number_of_votes[newAttestation.number_of_votes.length]=convertStringToUint256(_no_votes_votes_to_participant);
        //searching for correct voting event
        for(uint i=0;i<numberOfVoting_Events;i++){
            if(compareStrings(voting_events[i].event_id,_event_id)){
                voting_events[i].total_votes[_attestor]=newAttestation;
            }
        }
    return("done");
    }
   
function getParticipants(string memory _event_id) public view returns (string[] memory) {
    for(uint i = 0; i < numberOfVoting_Events; i++) {
        if(compareStrings(voting_events[i].event_id, _event_id)) {
            string[] memory participants = new string[](voting_events[i].no_of_participants);
            uint participantCount = 0;
            for(uint j = 0; j < voting_events[i].voters.length; j++) {
                address voterAddress = voting_events[i].voters[j];
                if(compareStrings(voting_events[i].participants[voterAddress], "")) {
                    continue;
                }
                bool isDeniedAccess = false;
                for(uint k = 0; k < voting_events[i].denied_access[voterAddress].length; k++) {
                    if(compareStrings(voting_events[i].denied_access[voterAddress][k], _event_id)) {
                        isDeniedAccess = true;
                        break;
                    }
                }
                if(!isDeniedAccess) {
                    participants[participantCount] = voting_events[i].participants[voterAddress];
                    participantCount++;
                }
            }
            string[] memory result = new string[](participantCount);
            for(uint k = 0; k < participantCount; k++) {
                result[k] = participants[k];
            }
            return result;
        }
    }
    return new string[](0);
}



}