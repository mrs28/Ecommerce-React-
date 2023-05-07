import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import SimpleAccordion from "../SimpleAccordion/SimpleAccordion";
import ItemCount from "../ItemCount/ItemCount";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import ScheduleIcon from '@mui/icons-material/Schedule';

const ItemDetailContainer = () => {
  // Desestructuro useParams()
  const { id } = useParams();
  console.log("soy id", id); //id llega como un string

  //al array preoducts
  const idProductSelected = products.find(
    (product) => product.id === Number(id)
  ); //product.id llega como number por eso convierto el string id en Number
  console.log(idProductSelected);

  return (
    <div className={styles.itemDetail}>
      {/* <h1>aquiii</h1> */}
      <div className={styles.itemDetailDescription}>
        <figure className={styles.figure}>
          <img
            src={idProductSelected.img}
            alt="foto de producto para gato"
            width={405}
            height={405}
          />
        </figure>
        <div className={styles.sliderBox}>
          <Slider
            className={styles.slider}
            dots={true} // muestra los puntos de navegación
            infinite={true} // permite moverse en el carrusel de forma continua
            speed={500} // velocidad de transición entre fotos
            slidesToShow={3} // número de fotos que se muestran al mismo tiempo
            slidesToScroll={1} // número de fotos que se desplazan al avanzar o retroceder
          >
            <div>
              <img
                className={styles.sliderImg}
                src={idProductSelected.img}
                alt="foto1"
                width={140}
                height={140}
              />
            </div>
            <div>
              <img
                className={styles.sliderImg}
                src={idProductSelected.img}
                alt="foto2"
                width={140}
                height={140}
              />
            </div>
            <div>
              <img
                className={styles.sliderImg}
                src={idProductSelected.img}
                alt="foto3"
                width={140}
                height={140}
              />
            </div>
          </Slider>
        </div>

        <div className={styles.accordionBox}>
          {/* <h2 className={styles.accordionTitle}>Sobre este producto</h2> */}
          <SimpleAccordion idProductSelected={idProductSelected} />
        </div>
      </div>

      <div className={styles.ItemDetailAddProduct}>
        <h2>{idProductSelected.title}</h2>
        <h2>{idProductSelected.category}</h2>
        <h2>{idProductSelected.stock}</h2>
        <br />
        <h3>{`Precio total: S/ ${idProductSelected.price}`}</h3>
        <br />
        <br />
        <div className={styles.delivery}>
          
          <div className={styles.shipping}>
            <span>
              {" "}
              <LocalShippingIcon className={styles.icon} fontSize="large" />
            </span>
            <div>
              <h5>Envío Gratis</h5>
              <p>Recíbelo en 5 días</p>
            </div>
          </div>
        </div>

        <div>
          <ItemCount />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;

//1. useParams() devuelve un objeto. la propiedad será el nombre que le asigna en la ruta dinámica, y el valor es el id que trae del ProductsMock.
// const parameters = useParams();
// console.log("soy el id del producto n°: ", parameters.id)
