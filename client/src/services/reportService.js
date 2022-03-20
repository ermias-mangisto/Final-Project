const BASIC_URL = "http://localhost:8100/report";
export const GetAllReport = async (page) => {
    try {
        return await fetch(`${BASIC_URL}?page=${page}&limit=10`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetReportById = async (id) => {

    try {
        return await fetch(`${BASIC_URL}/${id}`)
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
            headers: { 'Content-Type': 'application/json' }
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
            headers: { 'Content-Type': 'application/json' }
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
            method: "DELETE"
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}