// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    // You code here!
    let arr = str.split(' ');
    let newStr = [];
    arr.forEach(function(word){
        let a = word[0];
        let neWord = '';
        let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        
        if(regex.test(word)) {

            let str = word.match(regex).join('');
            let newWord = word.replace(str, '');
            newWord = newWord.substr(1) + a + 'ay' + str;
            newStr.push(newWord);
           
        } else {
            newWord = word.substr(1) + a + 'ay';
            newStr.push(newWord);
        }
    })

    return newStr.join(' ');
}

module.exports = {
    pigLatin
};
