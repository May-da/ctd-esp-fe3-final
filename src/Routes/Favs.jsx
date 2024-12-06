import Card from "../Components/Card";
import { useCharsState } from "../Context/context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favs} = useCharsState();
//  const {
//   state: { favs },
// } = useCharsState();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((char) => (
          <Card key={char.id} char={char} />
                ))}
      </div>
    </>
  );
};

export default Favs;
{/* este componente debe consumir los destacados del localStorage */}
{/* Deberan renderizar una Card por cada uno de ellos */}
