let arr = [2, 7, 11, 15, 3, 6];
let K = 9;

let motCap = [];
let tatCaCap = [];
let tonTai = false;
let index = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == K) {
      if (motCap.length == 0) {
        motCap = [arr[i], arr[j]];
        index = [i, j];
      }

      tatCaCap.push([arr[i], arr[j]]);
      tonTai = true;
    }
  }
}

console.log("Mot cap:", motCap);
console.log("Tat ca cap:", tatCaCap);
console.log("Ton tai:", tonTai);
console.log("Index:", index);
