
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { routes } from "./Config/routes";
import { useEffect } from "react";
import { useCharsState } from "./Context/context";


function App() {
  const { 
    state: {theme} 
  } = useCharsState(); 

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "";
  }, [theme]);
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact}element={<Contact />}/>
            <Route path={routes.detail}element={<Detail />}/>
            <Route path={routes.favorite} element={<Favs />}/>
            <Route path={routes.pnf} element={"Page not found - Error 404"}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
