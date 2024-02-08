import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // name ---> min 5 caracteres
  // email ---> contenga un @
  // password ---> que no tenga espacios en blanco ( "123") y mayor a 4

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log("soy evento del handleSubmit", e);

    // VALIDACIONES
    if (userData.name.length < 5) {
      setError(true);
      setErrorMessage("el nombre no puede ser menor a 5");
      return;
    }

    const incluye = userData.email.includes("@");

    if (!incluye) {
      setError(true);
      setErrorMessage("el email debe incluir un @");
      return;
    }

    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;

    if (!passwordIsValid) {
     
      setError(true);
      setErrorMessage(
        "la contraseña no debe tener espacios en blanco y debe tener como minimo 5 caracteres"
      );
      return;
    }

    // INSTRUCCION
    console.log(userData);
    // axios.post("elendpoint", userData)
    // axios.patch("elendpoint", { email: userData.email })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese su nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingrese su contraseña"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <h1>{errorMessage}</h1>}
     
    </div>
  );
};

export default Form;






// import styles from "./Formulario.module.css";
// import { useEffect, useState } from "react";

// const Formulario = () => {
//   //Creo un objeto para guardar todas la propiedades:
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("soy evento del handleSubmit", e);
//   };

//   const validatedFields = () => {
//     if (userData.name.length < 5) {
//       setError(true);
//       // setErrorMessage("El nombre no puede ser menor a 5 caracteres");
//       return;
//     }

//     const searchString = userData.email.includes("@");
//     console.log("soy email ingresado", searchString);

//     //si NO es true
//     if (!searchString) {
//       setError(true);
//       // setErrorMessage("Ingrese un email válido que incluya @");
//     }

//     //  password no debe tener espacios
//     const string = userData.password.trim();
//     const passwordIsValid = userData.password === string;

//     if (!passwordIsValid) {
//       // console.log("Ingresa un password válido");
//       setError(true);
//       // setErrorMessage("El password no dede tener espacios en blanco");
//     }
//   };

//   //   console.log(userData)

//   //*** INSTRUCCIÓN ***
//   //axios.post("el endpoint", userData)
//   //axios.patch("el endpoint", { userData.email })

//   useEffect(() => {
//     validatedFields();
//   }, [userData]);

//   return (
//     <div className={styles.form}>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           type="text"
//           placeholder="Ingrese su nombre"
//           // onChange={handleChange}
//           // onChange={(event) => setName(event.target.value)}
//         />

//         <input
//           name="email"
//           type="text"
//           placeholder="Ingrese e-mail"
//           // onChange={handleChange}
//           // onChange={handleChangeEmail}
//           //   onChange={(event)=>{console.log(event.target.value)}}
//         />

//         <input
//           name="password"
//           type="text"
//           placeholder="Ingresa tu contraseña"
//           // onChange={handleChange}
//           // onChange={handleChangePassword}
//         />

//         <button>ENVIAR FORMULARIO</button>
//       </form>

//       {/* {error && <h1>{errorMessage}</h1>} */}
//     </div>
//   );
// };

// export default Formulario;

//*** RENDERIZADO CONDICIONAL ***
// const [error, setError] = useState(false);
// const [errorMessage, setErrorMessage] = useState("");

// 1.Utilizo el objeto para asignarle el valor a la propiedad que tre el input. "Esparzo las propiedades del objeto userData y modifico la que quiero"
//2. En e.target.value me llega como string la propiedad: name, email o password . Entonces no le puedo asignar a un string "name", "email" o "password" un valor, para ello debo encerrarlo entre [] ahora sí puedo acceder a la propiedad de un objeto cuando es string. Y ya se velve dinámico y no hago un handleChange para cada input.

// const handleChange = (e) => {
//   setUserData({ ...userData, [e.target.name]: e.target.value });

// };
