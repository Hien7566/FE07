let N = prompt("Nhập số nguyên dương:");

let dem = 0;

for (let i = 0; i < N.length - 1; i++) {
  let so1 = Number(N[i]);
  let so2 = Number(N[i + 1]);

  if (so1 % 2 == 0 && so2 % 2 == 0) {
    dem++;
  }
}

alert("Số cặp chữ số chẵn liên tiếp: " + dem);
