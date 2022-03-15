const BASIC_API ='http://localhost:8100/register';

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
export const GetAll = async()=>{
      try {
          return await fetch(`${BASIC_API}`)
          .then(res => res.json())
          .catch(err => {return err})
      } catch (error) {
          return error
      }
} 
export const GetUserById = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const GetUserByName = async (name) => {
    try {
        return await fetch(`${BASIC_API}/name/${name}`)
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
            headers: { 'Content-Type': 'application/json' }
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
            method: "DELETE"
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}