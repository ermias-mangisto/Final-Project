
export function Logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userId")

}
