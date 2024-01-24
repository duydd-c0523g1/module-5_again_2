// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 5 hay không? (every).
const arr1 = [1, 3, 5, 7, 8, 2, 4, 6, 9]
const arr2 = [100, 200, 300, 400]
function checkArray(num) {
    return num > 5
}
console.log(arr1.every(checkArray))
console.log(arr2.every(checkArray))