// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. 
// Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
let book = {
    title: "Book of sorrows",
    author: "Bungie (Destiny series)",
    pages: 400,
    info() {
        console.log(`${this.title} was written by ${this.author}, it has ${this.pages} pages`);
    }
}
book.info();