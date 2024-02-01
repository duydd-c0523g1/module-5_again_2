import axios from "axios";
export const getAll = async () => {
    let temp  = await axios.get('http://localhost:8080/books')
    return temp.data;
}

export const findByName = async (name) => {
    let temp  = await axios.get('http://localhost:8080/books?title_like=' + name)
    return temp.data;
}

export const addBook = async (book) => {
    await axios.post('http://localhost:8080/books', book)
}

export const removeBook = async (book) => {
    await axios.delete('http://localhost:8080/books/' + book.id)
}

export const findById = async (id) => {
    let temp  = await axios.get('http://localhost:8080/books/' + id)
    return temp.data;
}

export const updateBook = async (book, id) => {
    await axios.patch('http://localhost:8080/books/' + id, book)
}