// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
const people = [
    {name: 'Duy', age: 20},
    {name: 'Hoang', age: 10},
    {name: 'Hiep', age: 30}
];
let [duy, hoang, hiep] = people;
console.log(duy.name);
console.log(duy.age);
console.log(hoang.name);
console.log(hoang.age);
console.log(hiep.name);
console.log(hiep.age);