const arrayOfNumbers = [1, 2, 3, 4, 5];
// ... spread operator
const array2 = [...arrayOfNumbers];

array2.push(6);

console.log(arrayOfNumbers);
console.log(array2);

// Error - const issue
// undefined

// by value or by reference
// string, number, boolean, symbol, null, undefined,

console.log(array2.map((current, index, wholeArray) => current * 2));
console.log(array2.filter((current, index, wholeArray) => current % 2 === 0));
console.log(
  array2.reduce(
    (accumulator, currentValue, index, wholeArray) =>
      accumulator + currentValue,
    0
  )
);
console.log(
  array2.forEach((current, index, wholeArray) =>
    console.log("Current", current)
  )
);
