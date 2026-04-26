const products = [
  { id: 1, name: "iPhone 14", price: 2000, category: "phone", stock: 10 },
  { id: 2, name: "Samsung S23", price: 1800, category: "phone", stock: 5 },
  { id: 3, name: "MacBook Pro", price: 3500, category: "laptop", stock: 3 },
  { id: 4, name: "Dell XPS", price: 3000, category: "laptop", stock: 7 },
  { id: 5, name: "AirPods", price: 500, category: "accessory", stock: 20 },
];

const showProducts = (list) => {
  list.forEach(({ name, price, stock }) => {
    console.log(`Tên: ${name} - Giá: ${price}$ - Kho: ${stock}`);
  });
};

const filteredProducts = products.filter((p) => p.price > 2000 && p.stock > 0);

const simpleList = products.map(({ name, price }) => ({ name, price }));

const productById3 = products.find((p) => p.id === 3);

const totalWarehouseValue = products.reduce(
  (total, p) => total + p.price * p.stock,
  0,
);

const newProduct = {
  id: 6,
  name: "Chuột Gaming",
  price: 150,
  category: "accessory",
  stock: 0,
};
const updatedList = [...products, newProduct];

const isAnyOutOfStock = updatedList.some((p) => p.stock === 0);
const isAllOver100 = products.every((p) => p.price > 100);
