const BASIC_URL = "http://localhost:8100/archivedPost";
export const GetAllArchive = async () => {
    try {
        return await fetch(BASIC_URL)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetArchiveById = async (id) => {
    try {
        return await fetch(`${BASIC_URL}/${id}`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const GetArchiveByName = async (name) => {
    try {
        return await fetch(`${BASIC_URL}/name/${name}`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const GetArchiveByType = async (type) => {
    try {
        return await fetch(`${BASIC_URL}/type/${type}`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const CreateArchive = async (archive) => {
    try {
        return await fetch(`${BASIC_URL}/add`, {
            method: "POST",
            body: JSON.stringify(archive),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const UpdateArchive = async (id, post) => {
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
export const DeleteArchive = async (id) => {

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