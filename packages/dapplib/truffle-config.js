require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender silver firm crawl punch minor history light army genuine'; 
let testAccounts = [
"0x61f4030f1844fbb546daf100d53cab3f8d36204a583dac4f69e966ceec33c506",
"0x911a669874626710baa1ef5684658aa6dc64a8f4d95d7076bfc0cbd5dfed6ea7",
"0x1cd22938ac5d8f6ba2ac9e62bcc420c87e3dcc9c8a85be8cbdc8a37ad9c47c5b",
"0x65ecfdfde584c7cb027e191d9d93919751102852d5f726274fb44b16b76b4868",
"0x85bd07e521d173dce1aae9b7ad26dccdc6b0f78463fdda136a141460ece24c81",
"0x1fd2c0db3ff0ffd828cf2993e0d795d08a86726be30c37686c5aafc87cd41780",
"0xc5414ba71d983aaa137bd5eae2befa47854a210275060c327da88edc93f67bac",
"0x9c9bce9935d8b8dd5d581c3a83ecff449b13b8c1626623aab33bc08568407a91",
"0x5b497f8eaad980ee6a32a141177469ff9d23476ad779c7287a9e4dfac8aa7384",
"0xb8d3058000c4642fc44138971a79d4bd9d91fa0f48ccadd839bd42cc3793df41"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

