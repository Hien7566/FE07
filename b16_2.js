let N = prompt("Nhập số nguyên dương:");
let K = prompt("Nhập chữ số cần đếm (0-9):");

let dem = 0;

for (let i = 0; i < N.length; i++) {
  if (N[i] == K) {
    dem++;
  }
}

console.log(dem);
alert("Số lần xuất hiện: " + dem);
