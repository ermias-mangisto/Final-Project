const BASIC_URL = process.env.NODE_ENV === 'production' ? "https://team-ware.herokuapp.com/alert" : "http://localhost:8100/alert/";
export const GetAllAlert = async (page) => {
  
    try {
        return await fetch(`${BASIC_URL}?page=${page}&limit=10`,{
        headers: { "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetAlertById = async (id) => {
    let options ={
        headers: { "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_URL}${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const GetRequestsByUserId = async (id) => {
    let options ={
        headers: { "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_URL}/requests/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
     console.log(localStorage.getItem("token"))
    }
}
export const CreateAlert = async (alert) => {
    try {
        return await fetch(`${BASIC_URL}add`, {
            method: "POST",
            body: JSON.stringify(alert),
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
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
            headers: { "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
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
            method: "DELETE",
            headers: { "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
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
            method: "DELETE",
            headers: { "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}