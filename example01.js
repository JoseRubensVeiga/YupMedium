function getNumberWithDecimals(number, decimals = 2) {
  // o método  toFixed() é exclusivo do objeto Number.
  return number.toFixed(decimals);
}

getNumberWithDecimals(10, 3); // 10.000

getNumberWithDecimals("10", 3); // number.toFixed is not a function
