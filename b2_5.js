let soTienGui = Number(prompt("Nhập số tiền gửi (VND):"));
let soThangGui = Number(prompt("Nhập số tháng gửi:"));

let laiSuatNam = 0;
let kyHan = "";

if (soThangGui < 3) {
  alert("Không đủ điều kiện gửi tiết kiệm");
} else {
  if (soThangGui >= 3 && soThangGui <= 5) {
    kyHan = "Ngắn hạn";
    laiSuatNam = 5;
  } else if (soThangGui >= 6 && soThangGui <= 11) {
    kyHan = "Trung hạn";
    laiSuatNam = 7;
  } else {
    kyHan = "Dài hạn";
    laiSuatNam = 8.5;
  }

  let tienLai = soTienGui * (laiSuatNam / 100 / 12) * soThangGui;
  let tongNhan = soTienGui + tienLai;

  console.log("Kỳ hạn: " + kyHan);
  console.log("Lãi suất: " + laiSuatNam + "%/năm");
  console.log("Tiền lãi: " + tienLai.toFixed(0) + " VND");
  console.log("Tổng tiền nhận được: " + tongNhan.toFixed(0) + " VND");

  alert("Kỳ hạn: " + kyHan + "\nTiền lãi: " + tienLai.toFixed(0) + " VND");
}
