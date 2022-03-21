const BASIC_URL = "http://localhost:8100/post";
export const GetAllPost = async (page)  => {
    try {
        return await fetch(`${BASIC_URL}?page=${page}&limit=3  `)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}

export const GetPostById = async (id) => {
    try {
        return await fetch(`${BASIC_URL}/${id}`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const GetPostByName = async (name,page) => {
    try {
        return await fetch(`${BASIC_URL}/name/${name}?page=${page}&limit=10`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}

export const GetPostByType = async (type) => {
    try {
        return await fetch(`${BASIC_URL}/type/${type}`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}

export const CreatePost = async (post,id) => {
    try {
        return await fetch(`${BASIC_URL}/add,${id}`, {
            method: "POST",
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const UpdatePost = async (id, post) => {
    try {
        return await fetch(`${BASIC_URL}/update/${id}`, {
            method: "PUT",
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const DeletePost = async (id) => {

    try {
        return await fetch(`${BASIC_URL}/delete/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}