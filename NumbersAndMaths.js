const score = 200
console.log(score)

const balance = new Number(600.87898)
console.log(balance)

console.log(typeof score)  // Type Is Number
console.log(typeof balance) // Type Is Object (Number) if made via New Keyowrd

console.log(score.toString()) // Convert Number To String
console.log(typeof score.toString()) // Type Is String

console.log(balance.toFixed(2)) // Convert Number To String With 2 Decimal Places by Rounding Off

console.log(score.toPrecision(3)) // Convert Number To String With 3 Significant Digits .... If Saying 3 Digit Must Be Three

const score1 = 200.546
console.log(score1.toPrecision(4)) // 4 Digit Available So Precised Number To 4 digit

const hundered = 1000000000
console.log(hundered.toLocaleString('en-IN'))
console.log(Number.MAX_VALUE)

// ToLocaleString Is Used To Convert Number To String With Commas As Thousand Separators

// ---- go to console and make a type number using new keyword nd see all avaiable prototypes .... above are some of the most used discussed


// ------------- MATHS -----------------

console.log(Math.random()) // Random Number Between 0 and 1
console.log(Math.random() * 10 + 1) // Random Number Between 1 and 10
console.log(Math.floor(Math.random() * 10 + 1)) // Random Integer Between 1 and 10

const min = 5
const max = 15

console.log(Math.floor(Math.random() * (max - min +1)) + min) // Random Integer Between Min and Max

