let arr = [5, 2, 8, 1, 9, 2, 8];

let viTri8 = -1;
let viTri2 = [];
let tonTai10 = false;
let dem8 = 0;

for (let i = 0; i < arr.length; i++) {
  let x = arr[i];

  if (x == 8 && viTri8 == -1) {
    viTri8 = i;
  }

  if (x == 2) {
    viTri2.push(i);
  }

  if (x == 10) {
    tonTai10 = true;
  }

  if (x == 8) {
    dem8++;
  }
}

let sortArr = [...arr];
for (let i = 0; i < sortArr.length; i++) {
  for (let j = i + 1; j < sortArr.length; j++) {
    if (sortArr[i] > sortArr[j]) {
      let temp = sortArr[i];
      sortArr[i] = sortArr[j];
      sortArr[j] = temp;
    }
  }
}

console.log("Vi tri dau tien cua 8:", viTri8);
console.log("Vi tri cua 2:", viTri2);
console.log("Ton tai 10:", tonTai10);
console.log("So lan xuat hien cua 8:", dem8);
console.log("sort:", sortArr);
