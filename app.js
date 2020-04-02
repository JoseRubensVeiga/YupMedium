function getNumberWithDecimals(number, decimals = 2) {
  return number.toFixed(decimals);
}

getNumberWithDecimals(10, 3); // 10.000

getNumberWithDecimals("10", 3); // number.toFixed is not a function
