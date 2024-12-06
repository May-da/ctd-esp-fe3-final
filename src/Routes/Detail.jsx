import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [char, setChar] = useState({})
  const params = useParams();
  console.log(params);
  
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

 
  useEffect(() => {
      axios(url).then((res) => {
        console.log(res.data);
        setChar(res.data);
      }) .catch((error) => {
            console.error("error:--->", error.response?.data);
      });
  }, [url]);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>

      <p><strong>Nombre:</strong> {char.name}</p>
      <p><strong>Email:</strong> {char.email}</p>
      <p><strong>Teléfono:</strong> {char.phone}</p>
      <p><strong>Sitio web:</strong> {char.website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail