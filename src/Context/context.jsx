// import axios from "axios";
// import { createContext, useContext, useEffect, useState,useReducer  } from "react";
// import {reducer} from "../Reducers/reducer"

// const CharStates = createContext()
// const lsFavs =  JSON.parse(localStorage.getItem("favs")) || [];

// const initialState = {
//   chars: [],
//   favs: lsFavs,
//   theme: "",
// };

// const Context = ({children}) => {
     
//   const [state, dispatch] = useReducer(reducer, initialState);

//     // const [chars, setChars] = useState([]);
//     // const [favs, setFavs] = useState(lsFavs);
//     // const [theme, setTheme] = useState("light");

//     const url = "https://jsonplaceholder.typicode.com/users";
    
//     useEffect(() => {
//       axios(url).then((res) => {
//         console.log(res);
//         dispatch({ type: "GET_CHARS", payload: res.data.results });
//         //setChars(res.data)
//       });
  
//     }, []);

//     useEffect(() => {
        
//         localStorage.setItem("favs", JSON.stringify(favs))
   
//       }, [state.favs]);

//       useEffect(() => {
//         document.body.className = state.theme === "dark" ? "dark" : ""; 
//       }, [state.theme]);

//       const changeTheme = () => state.theme((prev) => (prev === "light" ? "dark" : "light")); 
//     return(
//         <CharStates.Provider value={{state, dispatch, changeTheme}}>
//             {children}
//         </CharStates.Provider>

//     )
// }
// export default Context
// export const useCharsState = () => useContext(CharStates);

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CharStates = createContext()
const lsFavs =  JSON.parse(localStorage.getItem("favs")) || [];


const Context = ({children}) => {
      
    const [chars, setChars] = useState([]);
    const [favs, setFavs] = useState(lsFavs);
    const [theme, setTheme] = useState("light");

    const url = "https://jsonplaceholder.typicode.com/users";
    
    useEffect(() => {
      axios(url).then((res) => {
        console.log(res);
        setChars(res.data)
      });
  
    }, []);

    useEffect(() => {
        
        localStorage.setItem("favs", JSON.stringify(favs))
   
      }, [favs]);

      useEffect(() => {
        document.body.className = theme === "dark" ? "dark" : ""; 
      }, [theme]);

      const changeTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light")); 
    return(
        <CharStates.Provider value={{chars, favs, setFavs, theme, changeTheme}}>
            {children}
        </CharStates.Provider>

    )
}
export default Context
export const useCharsState = () => useContext(CharStates);

