let price = "  99.99  ";
let tax = "  0.1  ";
let discount = "  5  ";

let priceNum = parseFloat(price.trim());
let taxNum = parseFloat(tax.trim());
let discountNum = parseFloat(discount.trim());

let total = priceNum * (1 + taxNum) - discountNum;

let totalRounded = Math.round(total * 100) / 100;

let totalStr = "$" + totalRounded.toString();

let startsWithDollar = totalStr.startsWith("$");

let dotPosition = totalStr.indexOf(".");

console.log({
  priceNum,
  taxNum,
  discountNum,
  total,
  totalRounded,
  totalStr,
  startsWithDollar,
  dotPosition,
});
