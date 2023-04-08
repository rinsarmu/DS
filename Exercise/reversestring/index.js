// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {



    // the fourth algorithm
    // return str.split('').reduce((res, char)=>res = char + res, '')

    //the third algorithm
    // return str.split('').reverse().join('')

    // The second algortihm
    // let rev = ''
    // for(const char of str){
    //     rev = char + rev
    // }
    // return rev

    // # The first algorithm
    // let newString = str.c
    // console.log(str.length)
    // let rev = "";
    // for(let i = str.length; i >=0; i--){
    // rev = rev + str.charAt(i)
    // } 
    // console.log(rev.length)

    // return rev;

}
console.log(reverse('apple'))

module.exports = reverse;

// barnaantekalign@gmail.com

