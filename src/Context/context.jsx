import axios from "axios";
import { createContext, useContext, useEffect, useState,useReducer  } from "react";
import {reducer} from "../Reducers/reducer"

const CharStates = createContext()
const lsFavs =  JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  chars: [],
  favs: lsFavs,
  theme: "light",
};

const Context = ({children}) => {
     
  const [state, dispatch] = useReducer(reducer, initialState);

    const url = "https://jsonplaceholder.typicode.com/users";
    
    useEffect(() => {
      axios(url).then((res) => {
        console.log(res);
        dispatch({ type: "GET_CHARS", payload: res.data});
      
      });
  
    }, []);

    useEffect(() => {
        
        localStorage.setItem("favs", JSON.stringify(state.favs))
   
      }, [state.favs]);


    return(
        <CharStates.Provider value={{state, dispatch}}>
            {children}
        </CharStates.Provider>

    )
}
export default Context
 export const useCharsState = () => useContext(CharStates);

