import { useState } from "react"


const Form = () => {

  const [user, setUser] = useState({
    nombreCompleto: "",
    email: "",
  });
  console.log(user);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const regexName = /^[A-Za-zÁ-ÿá-ÿ]+\s[A-Za-zÁ-ÿá-ÿ]+(\s[A-Za-zÁ-ÿá-ÿ]+)*$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    
    if (
      user.nombreCompleto &&
      user.nombreCompleto.trim().length > 5 &&
      user.nombreCompleto.trim().split(" ").length >= 2 && // Asegura al menos 2 palabras
      regexName.test(user.nombreCompleto.trim()) &&
      user.email &&
      user.email.trim() &&
      regexEmail.test(user.email)
     
    ) {
       
      setShow(true); 
    }else{
      setError(true)
    }

               
  };
  
  return (
    <div>

      {show ? (
        <>
          <h4>Gracias {user.nombreCompleto}, te contactaremos cuanto antes vía mail</h4>
        </>
      ) : (
          <form noValidate onSubmit={handleSubmit}>
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="nombreCompleto"
            placeholder="Escribe tu nombre completo"
            onChange={handleChange}
            value={user.nombreCompleto}
          
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Escribe tu email"
            onChange={handleChange}
            value={user.email}
            
          />
          <button>Enviar</button>
          {error && <p> Por favor verifique su información nuevamente</p>}
        
          </form>
        )};
    </div>
  );
};

export default Form;
