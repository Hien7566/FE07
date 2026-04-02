// 1. Nhập dữ liệu từ bàn phím
let khuVuc = prompt("Nhập khu vực (A, B, C, X):").toUpperCase();
let doiTuong = prompt("Nhập đối tượng (1, 2, 3, 0):");
let diemToan = Number(prompt("Nhập điểm Toán:"));
let diemLy = Number(prompt("Nhập điểm Lý:"));
let diemHoa = Number(prompt("Nhập điểm Hóa:"));

// 2. Tạo biến để chứa điểm ưu tiên (ban đầu bằng 0)
let diemCong = 0;

// 3. Tính điểm cộng dựa theo Khu Vực
if (khuVuc === "A") {
  diemCong = diemCong + 2;
} else if (khuVuc === "B") {
  diemCong = diemCong + 1;
} else if (khuVuc === "C") {
  diemCong = diemCong + 0.5;
}

// 4. Cộng thêm điểm dựa theo Đối Tượng
if (doiTuong === "1") {
  diemCong = diemCong + 2.5;
} else if (doiTuong === "2") {
  diemCong = diemCong + 1.5;
} else if (doiTuong === "3") {
  diemCong = diemCong + 1;
}

// 5. Tính tổng điểm cuối cùng
let tongDiem = diemToan + diemLy + diemHoa + diemCong;

// 6. Kiểm tra kết quả Đậu hay Rớt
if (diemToan < 1 || diemLy < 1 || diemHoa < 1) {
  alert("Kết quả: Rớt vì có điểm liệt (dưới 1 điểm)");
} else if (tongDiem >= 20) {
  alert("Kết quả: Đậu! Tổng điểm của bạn là: " + tongDiem);
} else {
  alert("Kết quả: Rớt! Tổng điểm của bạn là: " + tongDiem);
}
