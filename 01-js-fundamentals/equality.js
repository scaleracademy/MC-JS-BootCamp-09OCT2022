console.log(1 == '1')       // lax equality
console.log(1 === '1')      // strict equality


// JS equality type-coercion rules 
/*
 *  strings -> turned into numbers 
 *  objects/arrays/complex data -> forced into primitive values
 */

let a = 1
let b = '1'
console.log(a == b)

let p = '' 
let q = 0 
let r = ' '

console.log(p == q) // true 
console.log(q == r) // true 
console.log(p == r)

// == is not transitive, but === is