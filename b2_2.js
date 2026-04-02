let heSoLuong = parseFloat(prompt("Nhập hệ số lương (VD: 3.5):"));
let namCongTac = parseInt(prompt("Nhập năm công tác (VD: 12):"));
let chucVu = prompt("Nhập chức vụ (GD, TP, NV):").toUpperCase();

let phuCapChucVu = 0;
if (chucVu === "GD") {
  phuCapChucVu = 1000;
} else if (chucVu === "TP") {
  phuCapChucVu = 700;
} else {
  phuCapChucVu = 500;
}

if (namCongTac > 10) {
  heSoLuong = heSoLuong * 1.1;
} else if (namCongTac < 5 && chucVu === "NV") {
  heSoLuong = heSoLuong * 0.95;
}

let tongPhuCap = (phuCapChucVu + heSoLuong) * 100;

console.log("Tổng phụ cấp:", tongPhuCap);
alert("Tổng phụ cấp của bạn là: " + tongPhuCap);
