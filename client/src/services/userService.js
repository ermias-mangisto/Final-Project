const BASIC_API = process.env.NODE_ENV === 'production' ? "https://team-ware.herokuapp.com/register" :'http://localhost:8100/register';

export const registerNewUser = async (user) => {
    
    return await fetch(`${BASIC_API}`, {
        method: 'POST', body: JSON.stringify(user), headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(res => res.json())
        .catch((err)=>{return err});
}
export const loginUser = async (user) => {
    return await fetch(`${BASIC_API}/login`, { 
        method: 'POST', body: JSON.stringify(user), headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(res => res.json())
        .catch((err)=>{return err});
}
export const GetAll = async(page)=>{
    let options ={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `
        }
    }
      try {
          return await fetch(`${BASIC_API}?page=${page}&limit=100`,options)
          .then(res => res.json())
          .catch(err => {return err})
      } catch (error) {
          return error
      }
} 
export const GetUserById = async (id) => {
    let options ={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_API}/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const GetUserCreatedPosts = async (id) => {
    let options ={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_API}/created/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const GetUserJoinedPosts = async (id) => {
    let options ={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_API}/joined/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const GetUserByName = async (name,page) => {
    let options ={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_API}/name/${name}?page=${page}&limit=10`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const UpdateUser = async (id, user) => {
    try {
        return await fetch(`${BASIC_API}/update/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")} `
            }
        })
        .then(response => response.json())
        .catch(reject => console.log("errr"))
    } catch (error) {
        return error
    }

}
export const DeleteUser = async (id) => {
    try {
        return await fetch(`${BASIC_API}/delete/${id}`, {
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