import { Link } from "react-router-dom";
import { useCharsState } from "../Context/context";

const Card = ({ name, username, id, char }) => {

  const {dispatch} = useCharsState();
  const addFav = ()=>{
    dispatch({type: "ADD_FAV", payload: char});
      }

  return (
    <div className="card">

        <Link to={`/detail/${char.id}`}> 
          <img src="/images/doctor.jpg" alt="Doctor" style={{ width: "100%" }} />
          <h3>{char.name}</h3>
        </Link>

        <h3>{char.username}</h3>
        <h2>{char.id}</h2>
        <button onClick={addFav} className="favButton"><span className="star-icon">⭐</span> </button>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
   
    </div>
  );
};

export default Card;