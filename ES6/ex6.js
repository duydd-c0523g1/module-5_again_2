// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
const arr = [1, 3, 5, 7, 8, 2, 4, 6, 9];
let [first, ...rest] = arr
console.log(`Phần tử đầu tiên: ${first}`);
console.log(`Phần tử đầu còn lại: ${rest}`);
