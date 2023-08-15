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

  //*** RENDERIZADO CONDICIONAL ***
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  //   const handleChangeName = (event) => {
  //     setName(event.target.value);
  //   };

  // 1.Utilizo el objeto para asignarle el valor a la propiedad que tre el input. "Esparzo las propiedades del objeto userData y modifico la que quiero"
  //2. En e.target.value me llega como string la propiedad: name, email o password . Entonces no le puedo asignar a un string "name", "email" o "password" un valor, para ello debo encerrarlo entre [] ahora sí puedo acceder a la propiedad de un objeto cuando es string. Y ya se velve dinámico y no hago un handleChange para cada input.
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // const handleChangeEmail = (event) => {
  //   setUserData({ ...userData, email: event.target.value });
  // };

  // const handleChangePassword = (event) => {
  //   setUserData({ ...userData, password: event.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("soy evento del handleSubmit", e);
  };

  // *** name que tenga un mínimo de 5 caracteres ***
  if (userData.name.length < 5) {
    // console.log("El nombre debe tener cómo mínimo 5 caracteres");
    setError(true);
    setErrorMessage("El nombre no puede ser menor a 5 caracteres");
    return;
  }
//*** email debe tener @ ***
//includes me devuelve un true or false
  const searchString = userData.email.includes("@")
  console.log("soy email ingresado", searchString)

  //si NO es true
  if(!searchString) {
    // console.log("Ingrese un email válido");
    setError(true)
    setErrorMessage("Ingrese un email válido que incluya @")
  }


  // // +++ password no debe tener espacios
  const string = userData.password.trim();
  const passwordIsValid = userData.password === string;

  if(!passwordIsValid){
    // console.log("Ingresa un password válido");
    setError(true)
    setErrorMessage("El password no dede tener espacios en blanco")
  }

  console.log(userData)

  //*** INSTRUCCIÓN ***
  //axios.post("el endpoint", userData)
  //axios.patch("el endpoint", { userData.email })

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

        <button>ENVIAR FORMULARIO</button>
      </form>

      {/* {error ? <h1>"USTED NO CUMPLE CON LAS VALIDACIONES</h1> : null} */}
    </div>
  );
};

export default Formulario;
