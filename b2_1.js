let n = prompt("Nhập vào số nguyên dương n:");
n = Number(n);

if (n % 2 !== 0 && n % 3 === 0 && n % 5 !== 0) {
  console.log("Thỏa mãn");
  alert("Thỏa mãn");
} else {
  console.log("Không thỏa mãn");
  alert("Không thỏa mãn");
}
