import axios from "axios";

export const getAll = async () => {
    let blogs = await axios.get("http://localhost:8080/blogs")
    return blogs.data;
}

export const addBlog = async (blog) => {
    await axios.put("http://localhost:8080/blogs", blog)
}

export const removeBlog = async (blog) => {
    await axios.delete("http://localhost:8080/blogs/" + blog.id)
}

export const findById = async (id) => {
    let blog = await axios.get("http://localhost:8080/blogs/" +id)
}

export const updateBlog = async (blog, id) => {
    axios.patch("http://localhost:8080/blogs/" + id, blog)
}

export const findByName = async (title) => {
    let matches = await axios.get("http://localhost:8080/blogs?title_like=" + title)
    return matches.data;
}