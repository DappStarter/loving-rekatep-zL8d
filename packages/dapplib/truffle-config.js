require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rice noble history inner clog army giggle'; 
let testAccounts = [
"0x59f74a9f7aca218d58ffd7cc549df0e2f9e47627791169cfc17cfddb2920b133",
"0x332f429a21a7fe1343e3f3f7910700995bc53baa17f622a844f1a837ef1e6b17",
"0x857f5a31588c2f1f739f2ecd3c6baff7a4face14c8b9aa9c5edbc5c82e061a5d",
"0x01635b468eb9360fbc074db734323117010fb5d46bad46776c517bcbf05831dc",
"0x941cafba93292ee1fad9533a1966fd47c1d404be285daf8986397984227448ab",
"0xd741631acb1c670da5106f885edd00fc2903f7d79ea2a60fc0730335f5e9f94c",
"0xc00eee3de3057d811c94a227a2c81d90c4ad29b82d994c40c5a88716ade8254a",
"0xc755cd636b7012a3aeca20fd78427830c2aa625e2e95fe0720f429fab07e3db3",
"0xd8ee64649a5d978be5d1e061b991a43932d3e40ab953fbbfbbd4d32fffd67ae4",
"0x934b6187de874cdbd6afa2890df21a6e66b8dd1a18d021d04ba128d4137fc1f4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


