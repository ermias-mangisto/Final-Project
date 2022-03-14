import React, { useEffect, useState } from "react";
import { GetAllArchive } from "../../services//archivedPostService";
export const ArchivePostProvider = React.createContext();
export const ArchivePostContext = ({children})=>{
const [archivepost,setArchivePost] = useState([])
useEffect(()=>{
    GetAllArchive()
    .then(res => setArchivePost(res))
},[])
return(
    <ArchivePostProvider.Provider value={{archivepost,setArchivePost}}>
        {children}
    </ArchivePostProvider.Provider>
)
}