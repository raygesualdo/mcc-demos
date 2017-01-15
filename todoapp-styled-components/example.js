const name = 'Ray'
const greeting = `Hello ${name}!

How are you???`
// Hello Ray!
//
// How are you?

function myTag(/* args */) { /* logic */ }
const example = myTag`Hello ${name}!`
// ??? <- depends on myTag
