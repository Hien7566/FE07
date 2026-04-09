let N = prompt("Nhập số nguyên dương:");

let max = 0;
let min = 9;

for (let i = 0; i < N.length; i++) {
  let so = Number(N[i]);

  if (so > max) {
    max = so;
  }
  if (so < min) {
    min = so;
  }
}

alert("Số lớn nhất: " + max + "\nSố nhỏ nhất: " + min);
