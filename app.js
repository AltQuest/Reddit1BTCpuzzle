let SEED_LENGTH=13;
let words=Array();
// load libraries
var bip39 = require('bip39')
var fs = require('fs'),
    readline = require('readline');
// create rd object to read words.txt file
var rd = readline.createInterface({
    input: fs.createReadStream('words.txt'),
    output: process.stdout,
    console: false
});
// add rach word to the words array
rd.on('line', function(line) {
    words.push(line)
});
// when finished, create permutations of words randomly
rd.on('close', function(line) {
    for(let i=0;i<2000000000000000000000000;i++) {
        let phrase=""
        for(let x=0;x<SEED_LENGTH;x++) {
            phrase=phrase+words[Math.round(Math.random()*words.length)]
            if(x>0) phrase=phrase+" "
        }
        if(bip39.validateMnemonic(phrase)) console.log(phrase)
        
    }
});