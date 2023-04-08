//Author: Robera Insarmu
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('Greetings!') === '!sgniteerG'

//👍👍👍👍
const reverse = str=> str.split('').reduce((rev, char)=>rev = char + rev, '')

//👎👎👎👎👎👎
function reverse1(str){
    let rev = ''
    for(let i = 0; i < str.length; i++){``
        rev = str.charAt(i) + rev
    } 
    return rev
}

console.log(reverse1('apple'))
console.log(reverse('apple'))
