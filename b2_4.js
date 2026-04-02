let loaiKH = prompt(
  "Nhập loại khách hàng (sinh hoat, kinh doanh, san xuat):",
).toLowerCase();
let soDien = Number(prompt("Nhập số kWh điện sử dụng:"));

let thanhTien = 0;

if (loaiKH === "sinh hoat") {
  if (soDien <= 50) {
    thanhTien = soDien * 1800;
  } else if (soDien <= 100) {
    thanhTien = 50 * 1800 + (soDien - 50) * 2000;
  } else if (soDien <= 200) {
    thanhTien = 50 * 1800 + 50 * 2000 + (soDien - 100) * 2500;
  } else {
    thanhTien = 50 * 1800 + 50 * 2000 + 100 * 2500 + (soDien - 200) * 3000;
  }
} else if (loaiKH === "kinh doanh") {
  thanhTien = soDien * 3500;
} else if (loaiKH === "san xuat") {
  thanhTien = soDien * 2000;
} else {
  alert("Loại khách hàng không hợp lệ");
}

// Nếu loại khách hàng hợp lệ thì in ra số tiền
if (thanhTien > 0) {
  alert("Số tiền điện phải nộp là: " + thanhTien + " VNĐ");
}
