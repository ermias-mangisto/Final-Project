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