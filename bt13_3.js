let input1 = "  hello  ";
let input2 = "  HELLO  ";
let input3 = "  hello world  ";

let isSame1 = input1.trim() === input2.trim();

let isSame2 = input1.trim().toUpperCase() === input2.trim();

let hasWorld = input3.trim().includes("world");

let replaced = input3.trim().replace("world", "JavaScript");

let combined = replaced.slice(0, 3) + replaced.slice(-3);

let isLength6 = combined.length === 6;

console.log({
  isSame1,
  isSame2,
  hasWorld,
  replaced,
  combined,
  isLength6,
});
