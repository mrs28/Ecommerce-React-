import styles from "./Formulario.module.css";
import { useState } from "react";

const Formulario = () => {
  //   const [name, setName] = useState();
  //   const [email, setEmail] = useState();

  // Creo un objeto para guardar todas la propiedades:
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   const handleChangeName = (event) => {
  //     setName(event.target.value);
  //   };

  // 1.Utilizo el objeto para asignarle el valor a la propiedad que tre el input. "Esparzo las propiedades del objeto userData y modifico la que quiero"
  //2. En e.target.value me llega como string la propiedad: name, email o password . Entonces no le puedo asignar a un string "name", "email" o "password" un valor, para ello debo encerrarlo entre [] ahora sí puedo acceder a la propiedad de un objeto cuando es string. Y ya se velve dinámico y no hago un handleChange para cada input.
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  // const handleChangeEmail = (event) => {
  //   setUserData({ ...userData, email: event.target.value });
  // };

  // const handleChangePassword = (event) => {
  //   setUserData({ ...userData, password: event.target.value });

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
          // onChange={(event) => setName(event.target.value)}
        />

        <input
          name="email"
          type="text"
          placeholder="Ingrese e-mail"
          onChange={handleChange}
          // onChange={handleChangeEmail}
          //   onChange={(event)=>{console.log(event.target.value)}}
        />

        <input
          name="password"
          type="text"
          placeholder="Ingresa tu contraseña"
          onChange={handleChange}
          // onChange={handleChangePassword}
        />

        <button>FORMULARIO AQUÍ</button>
      </form>
    </div>
  );
};

export default Formulario;
