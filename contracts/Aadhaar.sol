// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/VRFV2WrapperConsumerBase.sol";

contract Aadhaar is ERC721, ERC721URIStorage, Ownable {

    constructor() ERC721("Aadhaar", "UIDAI") {
        firstMinter[msg.sender]=true;
    }

    using Counters for Counters.Counter;

    struct Aadhaar_Data {
        uint256 tokenId;
        string Name;
        string DOB;
        string Sex;
        string Address;
        address Web3_Address;
        uint256 Aadhaar_NO;
    }

    Counters.Counter private _tokenIdCounter;
    Counters.Counter private _createdAadhaar;

    mapping(string => bool) private _usedTokenURIs;
    mapping(uint256 => Aadhaar_Data) private token_Mapped_Aadhaar_Data;
    mapping(address => Aadhaar_Data) private address_Mapped_Aadhaar_Data;
    mapping(address => mapping(uint=>uint)) public creator_Mapped_Token;
    mapping(address => uint) public count_Of_Created_Nfts;
    mapping(address => bool) private authorizedMinters;
    mapping(address => bool) private firstMinter;

    uint256[] private _allNfts;

    function totalSupply() public view returns (uint) {
        return _allNfts.length;
    }

    function tokenByIndex(uint index) public view returns (uint) {
        require(index < totalSupply(), "Index out of bounds");
        return _allNfts[index];
    }

    function tokenURIExists(string memory uri) public view returns (bool) {
        return _usedTokenURIs[uri] == true;
    }

    function getAadhaar(uint tokenId) public view returns (Aadhaar_Data memory) {
        return token_Mapped_Aadhaar_Data[tokenId];
    }

    function createdAadhaarCount() public view returns (uint) {
        return _createdAadhaar.current();
    }

    function tokenOfCreatorByIndex(address creator, uint index) public view returns (uint) {
        return creator_Mapped_Token[creator][index];
    }

//    function addAuthorizedMinter(address authorizedMinter) private {
//        require(firstMinter(msg.sender)==true);
//        authorizedMinters[authorizedMinter]=true;
//
//    }

    function mapDataToTokenId(uint256 tokenId,string memory Name,string memory DOB,string memory Sex,string memory Address,uint256 Aadhaar_NO) private
    {

        token_Mapped_Aadhaar_Data[tokenId].tokenId=tokenId;
        token_Mapped_Aadhaar_Data[tokenId].Name=Name;
        token_Mapped_Aadhaar_Data[tokenId].DOB=DOB;
        token_Mapped_Aadhaar_Data[tokenId].Sex=Sex;
        token_Mapped_Aadhaar_Data[tokenId].Address=Address;
        token_Mapped_Aadhaar_Data[tokenId].Aadhaar_NO=Aadhaar_NO;

    }

    function mapDataToAddress(address person,uint256 tokenId,string memory Name,string memory DOB,string memory Sex,string memory Address,uint256 Aadhaar_NO) private
    {

        address_Mapped_Aadhaar_Data[person].tokenId=tokenId;
        address_Mapped_Aadhaar_Data[person].Name=Name;
        address_Mapped_Aadhaar_Data[person].DOB=DOB;
        address_Mapped_Aadhaar_Data[person].Sex=Sex;
        address_Mapped_Aadhaar_Data[person].Address=Address;
        address_Mapped_Aadhaar_Data[person].Aadhaar_NO=Aadhaar_NO;

    }

    event Aadhaar_Created(
        uint256 indexed tokenId,
        string Name,
        address Owner,
        uint256 Addhaar_NO
    );

    function safeMint(address to, string memory uri,string memory Name,string memory DOB,string memory Sex,string memory Address,uint256 Aadhaar_NO) public onlyOwner {
        require(!tokenURIExists(uri), "Token URI already exists");
        require(firstMinter[msg.sender],"You are not authorized to mint a Aadhaar-NFT");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _createdAadhaar.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _usedTokenURIs[uri] = true;
        mapDataToAddress(to, tokenId, Name, DOB, Sex, Address, Aadhaar_NO);
        address_Mapped_Aadhaar_Data[to].Web3_Address=to;
        mapDataToTokenId(tokenId, Name, DOB, Sex, Address, Aadhaar_NO);
        token_Mapped_Aadhaar_Data[tokenId].Web3_Address=to;
        _allNfts.push(tokenId);
        count_Of_Created_Nfts[msg.sender]++;
        creator_Mapped_Token[msg.sender][count_Of_Created_Nfts[msg.sender]]=tokenId;
        emit Aadhaar_Created(tokenId,Name,to,Aadhaar_NO);
    }

    function getAllAadhaarNfts() public view returns (Aadhaar_Data[] memory) {
        uint allItemsCounts = totalSupply();
        uint currentIndex = 0;
        Aadhaar_Data[] memory items = new Aadhaar_Data[](_createdAadhaar.current());

        for (uint i = 0; i < allItemsCounts; i++) {
            uint tokenId = tokenByIndex(i);
            Aadhaar_Data storage item = token_Mapped_Aadhaar_Data[tokenId];

                items[currentIndex] = item;
                currentIndex += 1;
        }

        return items;
    }

    function getCreatedNfts() public view returns (Aadhaar_Data[] memory) {
        uint createdItemsCount = count_Of_Created_Nfts[msg.sender];
        Aadhaar_Data[] memory items = new Aadhaar_Data[](createdItemsCount);

        for (uint i = 0; i < createdItemsCount; i++) {
            uint tokenId = tokenOfCreatorByIndex(msg.sender, i);
            Aadhaar_Data storage item = token_Mapped_Aadhaar_Data[tokenId];
            items[i] = item;
        }

        return items;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId ,
        uint256 batchSize
    ) internal override virtual {
        require(from==address(0),"You Cant Transfer Your Aadhaar NFT");
        super._beforeTokenTransfer(from, to, tokenId,batchSize);
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override virtual {}


    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (string memory)
    {
        return super.tokenURI(tokenId);
    }


    //Random No.

//    event RequestSent(uint256 requestId, uint32 numWords);
//    event RequestFulfilled(
//        uint256 requestId,
//        uint256[] randomWords,
//        uint256 payment
//    );
//
//    struct RequestStatus {
//        uint256 paid;
//        bool fulfilled;
//        uint256[] randomWords;
//    }
//    mapping(uint256 => RequestStatus)
//    public s_requests;
//
//
//    uint256[] public requestIds;
//    uint256 public lastRequestId;
//
//    uint32 callbackGasLimit = 100000;
//
//    uint16 requestConfirmations = 3;
//
//    uint32 numWords = 2;
//
//    address linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
//
//    address wrapperAddress = 0x99aFAf084eBA697E584501b8Ed2c0B37Dd136693;
//
//
//    function requestRandomWords()
//    external
//    onlyOwner
//    returns (uint256 requestId)
//    {
//        requestId = requestRandomness(
//            callbackGasLimit,
//            requestConfirmations,
//            numWords
//        );
//        s_requests[requestId] = RequestStatus({
//        paid: VRF_V2_WRAPPER.calculateRequestPrice(callbackGasLimit),
//        randomWords: new uint256[](0),
//        fulfilled: false
//        });
//        requestIds.push(requestId);
//        lastRequestId = requestId;
//        emit RequestSent(requestId, numWords);
//        return requestId;
//    }
//
//    function fulfillRandomWords(
//        uint256 _requestId,
//        uint256[] memory _randomWords
//    ) internal override {
//        require(s_requests[_requestId].paid > 0, "request not found");
//        s_requests[_requestId].fulfilled = true;
//        s_requests[_requestId].randomWords = _randomWords;
//
//        emit RequestFulfilled(
//            _requestId,
//            _randomWords,
//            s_requests[_requestId].paid
//        );
//    }
//
//    function getRequestStatus(
//        uint256 _requestId
//    )
//    external
//    view
//    returns (uint256 paid, bool fulfilled, uint256[] memory randomWords)
//    {
//        require(s_requests[_requestId].paid > 0, "request not found");
//        RequestStatus memory request = s_requests[_requestId];
//        return (request.paid, request.fulfilled, request.randomWords);
//    }
//
//    function withdrawLink() public onlyOwner {
//        LinkTokenInterface link = LinkTokenInterface(linkAddress);
//        require(
//            link.transfer(msg.sender, link.balanceOf(address(this))),
//            "Unable to transfer"
//        );
//    }


}
