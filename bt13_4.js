let a = "  123  ";
let b = "  456  ";
let c = "  abc  ";
let d = "  0  ";

let numA = parseFloat(a.trim());
let numB = parseFloat(b.trim());
let numC = parseFloat(c.trim());
let numD = parseFloat(d.trim());

let greaterAB = numA > numB;

let sum579 = numA + numB === 579;

let isZero = numD === 0;

let isNaNC = Number.isNaN(numC);

let looseEqual = numA == "123";

let strictEqual = numA === "123";

console.log({
  numA,
  numB,
  numC,
  numD,
  greaterAB,
  sum579,
  isZero,
  isNaNC,
  looseEqual,
  strictEqual,
});
