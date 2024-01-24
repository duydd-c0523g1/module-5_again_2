// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
let welcome = (...names) => `"Welcome ${names.join(', ')}"`
console.log(welcome('Duy', 'Hoang', 'Hiep'));