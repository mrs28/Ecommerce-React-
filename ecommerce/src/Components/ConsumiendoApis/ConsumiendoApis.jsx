import { useEffect, useState } from "react";

const ConsumiendoApis = () => {
  const [posts, setUserPosts] = useState([]);
  const [iscreated, setIsCreated] = useState(false);

  const createPost = () => {
    //POST
    const postData = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: "Título",
        userId: 2,
        body: "Publicación de prueba",
      }),
    });

    postData
      .then((response) => {
        setIsCreated(true);
      })
      .catch((error) => {
        console.log("algo salió mal");
      });
  };

  //para que se dispare 1 sola vez, el [] va vacío
  useEffect(() => {
    //GET
    const getData = fetch("https://jsonplaceholder.typicode.com/posts");

    getData
      .then((response) => response.json())
      // .then((response) => console.log("soy respuesta en formato json: ", response))
      .then((response) => {
        setUserPosts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("soy el valor de posts: ", posts);
  console.log("estoy creando con el verbo POST: ", iscreated);

  return (
    <div>
      <button onClick={createPost}>CREAR UN POST</button>
    </div>
  );
};

export default ConsumiendoApis;
