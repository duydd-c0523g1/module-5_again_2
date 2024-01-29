import axios from "axios";

export const getAll = async () => {
    let blogs = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return blogs.data;
}

export const addBlog = async (blog) => {
    await axios.put("https://jsonplaceholder.typicode.com/posts", blog)
}

export const removeBlog = async (blog) => {
    await axios.delete("https://jsonplaceholder.typicode/posts/" + blog.id)
}

export const findById = async (id) => {
    let blog = await axios.get("https://jsonplaceholder.typicode.com/posts/" +id)
}

export const updateBlog = async (blog, id) => {
    axios.patch("https://jsonplaceholder.typicode.com/posts/" + id, blog)
}

export const findByName = async (name) => {
    let matches = await axios.get("https://jsonplaceholder.typicode.com/posts?title_like=" + name)
    return matches.data;
}