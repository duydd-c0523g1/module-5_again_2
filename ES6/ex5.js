// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
const arr1 = [1, 3, 5, 7, 8, 2, 4, 6, 9];
let result = arr1.find((element) => element > 3);
if (result) {
  console.log(result);
} else {
  console.log("Nope");
}
