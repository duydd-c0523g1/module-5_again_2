// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
const arr = [1, 3, 5, 7, 8, 2, 4, 6, 9]
let sum = arr.reduce((total, curr) => total + curr)
console.log(sum);