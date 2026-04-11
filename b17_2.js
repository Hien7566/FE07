let arr = [1, 2, 3, 4, 5, 6];

let chan = [];
let binhPhuong = [];
let lonHon3 = [];
let nhanDoi = [];

for (let i = 0; i < arr.length; i++) {
  let x = arr[i];

  if (x % 2 == 0) {
    chan.push(x);
  }

  binhPhuong.push(x * x);

  if (x > 3) {
    lonHon3.push(x);
  }

  nhanDoi.push(x * 2);
}

console.log("Chan:", chan);
console.log("Binh phuong:", binhPhuong);
console.log("Lon hon 3:", lonHon3);
console.log("Nhan doi:", nhanDoi);
