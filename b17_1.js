let arr = [3, 7, 2, 9, 4, 6, 2];

let sum = 0;
let max = arr[0];
let min = arr[0];
let chan = 0;
let le = 0;

for (let i = 0; i < arr.length; i++) {
  let x = arr[i];

  sum = sum + x;

  if (x > max) {
    max = x;
  }

  if (x < min) {
    min = x;
  }

  if (x % 2 == 0) {
    chan = chan + 1;
  } else {
    le = le + 1;
  }
}

let trungBinh = (sum / arr.length).toFixed(2);

console.log("Tong:", sum);
console.log("Max:", max);
console.log("Min:", min);
console.log("Chan:", chan);
console.log("Le:", le);
console.log("Trung binh:", trungBinh);
