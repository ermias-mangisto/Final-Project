const BASIC_URL = "http://localhost:8100/comment";
export const GetAllComment = async (page) => {
    let options ={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `
        }}
    try {
        return await fetch(`${BASIC_URL}?page=${page}&limit=10`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetPostComment = async (postId,page) => {
    let options ={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `
        }}
    try {
        return await fetch(`${BASIC_URL}/postId/${postId}?page=${page}&limit=10`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetCommentById = async (id) => {
    let options ={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `
        }
    }

    try {
        return await fetch(`${BASIC_URL}/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const CreateComment = async (comment) => {
    try {
        return await fetch(`${BASIC_URL}/add`, {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const UpdateComment = async (id, comment) => {
    try {
        return await fetch(`${BASIC_URL}/update/${id}`, {
            method: "PUT",
            body: JSON.stringify(comment),
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const DeleteComment = async (id) => {

    try {
        return await fetch(`${BASIC_URL}/delete/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}