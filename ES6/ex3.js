// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).
const arr = [1, 3, 5, 7, 8, 2, 4, 6, 9]
let result = (array, num) => array.includes(num) ? num : "Không tìm thấy"
console.log(result(arr, 5));