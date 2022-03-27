const BASIC_URL = "http://localhost:8100/alert/";
export const GetAllAlert = async (page) => {
    try {
        return await fetch(`${BASIC_URL}?page=${page}&limit=10`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetAlertById = async (id) => {

    try {
        return await fetch(`${BASIC_URL}${id}`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const GetRequestsByUserId = async (id) => {

    try {
        return await fetch(`${BASIC_URL}/requests/${id}`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const CreateAlert = async (alert) => {
    try {
        return await fetch(`${BASIC_URL}add`, {
            method: "POST",
            body: JSON.stringify(alert),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const UpdateAlert = async (id, alert) => {
    try {
        return await fetch(`${BASIC_URL}update/${id}`, {
            method: "PUT",
            body: JSON.stringify(alert),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const DeleteAlert = async (id) => {

    try {
        return await fetch(`${BASIC_URL}delete/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const DeleteRequests = async (postId) => {

    try {
        return await fetch(`${BASIC_URL}delete-requests/${postId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}