let danhSachGiaoDich = [
  {
    id: "T001",
    type: "nap",
    amount: 5000000,
    date: "2025-07-01",
    account: "123456789",
  },
  {
    id: "T002",
    type: "rut",
    amount: 2000000,
    date: "2025-07-02",
    account: "123456789",
  },
  {
    id: "T003",
    type: "nap",
    amount: 3000000,
    date: "2025-07-03",
    account: "987654321",
  },
  {
    id: "T004",
    type: "rut",
    amount: 1000000,
    date: "2025-07-03",
    account: "123456789",
  },
];

let giaoDichMoi1 = {
  id: "T005",
  type: "nap",
  amount: 1500000,
  date: "2025-07-04",
  account: "123456789",
};
let giaoDichMoi2 = {
  id: "T006",
  type: "rut",
  amount: 500000,
  date: "2025-07-04",
  account: "987654321",
};
danhSachGiaoDich.push(giaoDichMoi1);
danhSachGiaoDich.push(giaoDichMoi2);

for (let i = 0; i < danhSachGiaoDich.length; i++) {
  let gd = danhSachGiaoDich[i];
  console.log(
    gd.id +
      " - " +
      gd.type +
      " - " +
      gd.amount +
      " - " +
      gd.date +
      " - " +
      gd.account,
  );
}

let tongNap = 0;
let tongRut = 0;
for (let i = 0; i < danhSachGiaoDich.length; i++) {
  let gdHienTai = danhSachGiaoDich[i];
  if (gdHienTai.type === "nap") {
    tongNap = tongNap + gdHienTai.amount;
  } else {
    tongRut = tongRut + gdHienTai.amount;
  }
}
console.log(tongNap);
console.log(tongRut);

let bangSoDu = {};
for (let i = 0; i < danhSachGiaoDich.length; i++) {
  let gdHienTai = danhSachGiaoDich[i];
  let soTaiKhoan = gdHienTai.account;
  let soTien = gdHienTai.amount;

  if (bangSoDu[soTaiKhoan] === undefined) {
    bangSoDu[soTaiKhoan] = 0;
  }

  if (gdHienTai.type === "nap") {
    bangSoDu[soTaiKhoan] = bangSoDu[soTaiKhoan] + soTien;
  } else {
    bangSoDu[soTaiKhoan] = bangSoDu[soTaiKhoan] - soTien;
  }
}
console.log(bangSoDu);

for (let i = 0; i < danhSachGiaoDich.length; i++) {
  let gdHienTai = danhSachGiaoDich[i];
  if (gdHienTai.account === "123456789") {
    console.log(gdHienTai);
  }
}

let gdLonNhat = danhSachGiaoDich[0];
for (let i = 1; i < danhSachGiaoDich.length; i++) {
  let gdTiepTheo = danhSachGiaoDich[i];
  if (gdTiepTheo.amount > gdLonNhat.amount) {
    gdLonNhat = gdTiepTheo;
  }
}
console.log(gdLonNhat);

let demNap = 0;
let demRut = 0;
for (let i = 0; i < danhSachGiaoDich.length; i++) {
  if (danhSachGiaoDich[i].type === "nap") {
    demNap = demNap + 1;
  } else {
    demRut = demRut + 1;
  }
}
console.log(demNap);
console.log(demRut);
