import '../index.css';
import Card from '../Components/Card'
import { useCharsState } from '../Context/context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {chars, changeTheme, theme} = useCharsState();
  // const {
  //   state: { chars },
  // } = useCharsState();
     

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {chars.map((char) => (
        <Card key={char.id} char={char} />
        ))}          
      </div>
    </main>
  )
}

export default Home