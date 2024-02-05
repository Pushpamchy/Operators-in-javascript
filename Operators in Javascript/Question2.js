// In JavaScript, the comma operator , is used to evaluate multiple expressions within a single statement. It evaluates each expression from left to right and returns the value of the rightmost expression. While the comma operator itself is not used very frequently, it can be useful in certain scenarios, such as in for loop headers or when multiple expressions need to be executed in a single line.

let a = 5, b = 10, c = 15;

let result = (a++, b++, c++);

console.log(result); // Output: 15
console.log(a);      // Output: 6
console.log(b);      // Output: 11
console.log(c);      // Output: 16
