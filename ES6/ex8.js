// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
let math = (...numbers) => numbers.reduce((sum, curr) => sum + curr, 0)
console.log(math(1,2,3,4,5,6));
