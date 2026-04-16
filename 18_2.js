let products = [
  {
    id: "P001",
    name: "Tủ lạnh",
    price: 5000000,
    quantity: 10,
    category: "Đồ gia dụng",
  },
  {
    id: "P002",
    name: "Áo thun",
    price: 200000,
    quantity: 25,
    category: "Thời trang",
  },
  {
    id: "P003",
    name: "Gạo ST25",
    price: 30000,
    quantity: 100,
    category: "Thực phẩm",
  },
];

let sp4 = {
  id: "P004",
  name: "Máy giặt",
  price: 7000000,
  quantity: 5,
  category: "Đồ gia dụng",
};
let sp5 = {
  id: "P005",
  name: "Áo khoác",
  price: 450000,
  quantity: 15,
  category: "Thời trang",
};
products.push(sp4);
products.push(sp5);

console.log(products);

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 1000000) {
    console.log(products[i]);
  }
}

let tongTien = 0;
for (let i = 0; i < products.length; i++) {
  tongTien = tongTien + products[i].price * products[i].quantity;
}
console.log(tongTien);

for (let i = 0; i < products.length; i++) {
  if (products[i].id === "P002") {
    products[i].quantity = products[i].quantity + 10;
  }
}

for (let i = 0; i < products.length; i++) {
  if (products[i].id === "P003") {
    products.splice(i, 1);
  }
}

let thongKe = {};
for (let i = 0; i < products.length; i++) {
  let tenDanhMuc = products[i].category;
  if (thongKe[tenDanhMuc] === undefined) {
    thongKe[tenDanhMuc] = 1;
  } else {
    thongKe[tenDanhMuc] = thongKe[tenDanhMuc] + 1;
  }
}
console.log(thongKe);

let sanPhamMax = products[0];
for (let i = 1; i < products.length; i++) {
  if (products[i].quantity > sanPhamMax.quantity) {
    sanPhamMax = products[i];
  }
}
console.log(sanPhamMax);

for (let i = 0; i < products.length; i++) {
  let tenSanPham = products[i].name.toLowerCase();
  if (tenSanPham.includes("áo")) {
    console.log(products[i]);
  }
}
