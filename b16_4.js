let N = prompt("Nhập số nguyên dương:");

let daoNguoc = "";

for (let i = N.length - 1; i >= 0; i--) {
  daoNguoc = daoNguoc + N[i];
}

if (N == daoNguoc) {
  alert("YES");
} else {
  alert("NO");
}
