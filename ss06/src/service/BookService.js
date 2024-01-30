import axios from "axios";
export const getAll = async () => {
    let temp  = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
    return temp.data;
}

export const findByName = async (name) => {
    let temp  = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books?title_like=' + name)
    return temp.data;
}

export const addBook = async (book) => {
    await axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books', book)
}