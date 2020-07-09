// function titleCase(title, minorWords) {

//     let up = title.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()).split(' ');
//     if (minorWords != null) {
//         let minor = minorWords.toLowerCase().split(' ');
//         up.map((word, index) => {
//             if (index > 0 & minor.includes(word.toLowerCase())) {
//                 up[index] = word.toLowerCase();
//             }
//         })
//     }
//     // console.log(up.join(' '))
//     return up.join(' ');
// }
// // titleCase("a bc", minorWords = "bc")
// titleCase("First a of in", "an often into")

// titleCase('a clash of KINGS', 'a an the of')
// titleCase('')
// Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
// Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
// Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')

function anagrams(word, words) {
    let original = word.split('').sort().join('')
    let final_words = []
    words.map((each) => {
        let temp = each.split('').sort().join('');
        if (temp == original) final_words.push(each);
    })
    return final_words;
}
console.log('hola'.split('').sort().join(''))


anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])// => ['aabb', 'bbaa']
