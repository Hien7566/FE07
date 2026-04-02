let messy = " ...JavaScript is Fun!!! ";

let step1 = messy.trim();

let step2 = step1.replace("Fun", "Awesome");

let step3 = step2.toUpperCase();

let step4 = step3.substring(0, 3);

let step5 = step3[step3.length - 1];

let step6 = step3.includes("AWESOME");

let step7 = step3.indexOf("J");

let step8 = step3.lastIndexOf("S");

let step9 = step3.endsWith("!");

let step10 = step2.slice(-3);

console.log({
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
  step7,
  step8,
  step9,
  step10,
});
