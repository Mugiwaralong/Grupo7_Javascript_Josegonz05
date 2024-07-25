/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result
 *
 *
 * output => [7,5,3,1]
 */
let result = [];

[1, 3, 5, 7].reverse().map(num => result.push(num));

//export result
module.exports = result;