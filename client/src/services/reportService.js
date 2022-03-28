const BASIC_URL = "http://localhost:8100/report";
export const GetAllReport = async (page) => {
    let options ={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_URL}?page=${page}&limit=10`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetReportById = async (id) => {
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
export const CreateReport = async (report) => {
    
    try {
        return await fetch(`${BASIC_URL}/add`, {
            method: "POST",
            body: JSON.stringify(report),
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
export const UpdateReport = async (id, report) => {
    try {
        return await fetch(`${BASIC_URL}/update/${id}`, {
            method: "PUT",
            body: JSON.stringify(report),
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
export const DeleteReport = async (id) => {

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