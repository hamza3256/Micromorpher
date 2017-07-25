pragma solidity ^0.4.11;

library ExternalStorage {

    /*mapping(bytes32 => uint) private uIntStorage;
    mapping(bytes32 => uint16) private uInt16Storage;
    mapping(bytes32 => uint32) private uInt32Storage; */
    mapping(bytes32 => uint256) private uInt256Storage;
    /*mapping(bytes32 => string) private stringStorage;
    mapping(bytes32 => address) private addressStorage;
    mapping(bytes32 => bytes) private bytesStorage;
    mapping(bytes32 => bytes3) private bytes3Storage;
    mapping(bytes32 => bytes32) private bytes32Storage;
    mapping(bytes32 => bool) private booleanStorage;
    mapping(bytes32 => int) private intStorage;
    mapping(bytes32 => int32) private int32Storage;
    mapping(bytes32 => int256) private int256Storage;

    function getUIntValue(bytes32 record) public constant returns (uint) {
        return uIntStorage[record];
    }

    function setUIntValue(bytes32 record, uint value) public  {
        uIntStorage[record] = value;
    }

    function deleteUIntValue(bytes32 record) public {
        delete uIntStorage[record];
    }

    function getUInt16Value(bytes32 record) public constant returns (uint16) {
        return uInt16Storage[record];
    }

    function setUInt16Value(bytes32 record, uint16 value) public {
        uInt16Storage[record] = value;
    }

    function deleteUInt16Value(bytes32 record) public {
        delete uInt16Storage[record];
    }

    function getUInt32Value(bytes32 record) public constant returns (uint32) {
        return uInt32Storage[record];
    }

    function setUInt32Value(bytes32 record, uint32 value) public {
        uInt32Storage[record] = value;
    }

    function deleteUInt32Value(bytes32 record) public {
        delete uInt32Storage[record];
    }*/

    function getUInt256Value(bytes32 record) public constant returns (uint256) {
        return uInt256Storage[record];
    }

    function setUInt256Value(bytes32 record, uint256 value) public {
        uInt256Storage[record] = value;
    }

    function deleteUInt256Value(bytes32 record) public {
        delete uInt256Storage[record];
    }

    /*function getStringValue(bytes32 record) public constant returns (string) {
        return stringStorage[record];
    }

    function setStringValue(bytes32 record, string value) public {
        stringStorage[record] = value;
    }

    function deleteStringValue(bytes32 record) public {
        delete stringStorage[record];
    }

    function getAddressValue(bytes32 record) public constant returns (address) {
        return addressStorage[record];
    }

    function setAddressValue(bytes32 record, address value) public {
        addressStorage[record] = value;
    }

    function deleteAddressValue(bytes32 record) public {
        delete addressStorage[record];
    }

    function getBytesValue(bytes32 record) public constant returns (bytes) {
        return bytesStorage[record];
    }

    function setBytesValue(bytes32 record, bytes value) public {
        bytesStorage[record] = value;
    }

    function deleteBytesValue(bytes32 record) public {
        delete bytesStorage[record];
    }

    function getBytes3Value(bytes32 record) public constant returns (bytes3) {
        return bytes3Storage[record];
    }

    function setBytes3Value(bytes32 record, bytes3 value) public {
        bytes3Storage[record] = value;
    }

    function deleteBytes3Value(bytes32 record) public {
        delete bytes3Storage[record];
    }

    function getBytes32Value(bytes32 record) public constant returns (bytes32) {
        return bytes32Storage[record];
    }

    function setBytes32Value(bytes32 record, bytes32 value) public {
        bytes32Storage[record] = value;
    }

    function deleteBytes32Value(bytes32 record) public {
        delete bytes32Storage[record];
    }

    function getBooleanValue(bytes32 record) public constant returns (bool) {
        return booleanStorage[record];
    }

    function setBooleanValue(bytes32 record, bool value) public {
        booleanStorage[record] = value;
    }

    function deleteBooleanValue(bytes32 record) public {
        delete booleanStorage[record];
    }

    function getIntValue(bytes32 record) public constant returns (int) {
        return intStorage[record];
    }

    function setIntValue(bytes32 record, int value) public {
        intStorage[record] = value;
    }

    function deleteIntValue(bytes32 record) public {
        delete intStorage[record];
    }

    function getInt32Value(bytes32 record) public constant returns (int32) {
        return int32Storage[record];
    }

    function setInt32Value(bytes32 record, int32 value) public {
        int32Storage[record] = value;
    }

    function deleteInt32Value(bytes32 record) public {
        delete int32Storage[record];
    }

    function getInt256Value(bytes32 record) public constant returns (int256) {
        return int256Storage[record];
    }

    function setInt256Value(bytes32 record, int256 value) public {
        int256Storage[record] = value;
    }

    function deleteInt256Value(bytes32 record) public {
        delete int256Storage[record];
    }*/
}
