let N = prompt("Nhập số nguyên dương:");

let tong = 0;

for (let i = 0; i < N.length; i++) {
  let so = Number(N[i]);

  if (so % 3 == 0) {
    tong = tong + so;
  }
}

console.log(tong);
alert("Tổng các chữ số chia hết cho 3: " + tong);
