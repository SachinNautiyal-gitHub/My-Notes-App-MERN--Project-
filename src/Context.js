

import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [notesArray, setNotesArray] = useState([]);
   


  const fetchAllnotes = async () => {
    const data = await fetch("http://localhost:5000/api/notes/fetchnote", {

      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'auth-token': localStorage.getItem('token')
      }
    })
    const res = await data.json();
    console.log(res);
    setNotesArray(res);
  }




  useEffect(() => {
      fetchAllnotes();
   
  }, []);


  return <AppContext.Provider value={{ notesArray }}>
    {children}
  </AppContext.Provider>

}


export { AppContext, AppProvider };