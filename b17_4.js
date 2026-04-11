let arr = [1, 2, 2, 3, 4, 4, 5];

let unique = [];
for (let i = 0; i < arr.length; i++) {
  if (!unique.includes(arr[i])) {
    unique.push(arr[i]);
  }
}

let mostFrequent = unique[0];
let max = 0;
let appearOnce = [];

for (let i = 0; i < unique.length; i++) {
  let x = unique[i];
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == x) {
      count++;
    }
  }

  if (count > max) {
    max = count;
    mostFrequent = x;
  }

  if (count == 1) {
    appearOnce.push(x);
  }
}

let countDistinct = unique.length;

console.log("Unique:", unique);
console.log("Most frequent:", mostFrequent);
console.log("Appear once:", appearOnce);
console.log("Count distinct:", countDistinct);
