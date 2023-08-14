import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// import CssBaseline from '@mui/material/CssBaseline';
import Typography from "@mui/material/Typography";
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
  // console.log("soy id", id); //id llega como un string

  //al array products
  const idProductSelected = products.find(
    (product) => product.id === Number(id)
  );
  //usae comprador estricto
  //product.id llega como number por eso convierto el string id en Number

  const onAdd = (cantidad) => {
    console.log(`se agregó al carrito ${cantidad} productos `);
  };

  return (
    <div className={styles.itemDetail}>
      {/* Columna izquierda  */}
      <div className={styles.itemDetailImage}>
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
                width={120}
                height={120}
              />
            </div>
            <div>
              <img
                className={styles.sliderImg}
                src={idProductSelected.img}
                alt="foto2"
                width={120}
                height={120}
              />
            </div>
            <div>
              <img
                className={styles.sliderImg}
                src={idProductSelected.img}
                alt="foto3"
                width={120}
                height={120}
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* Columna centro  */}
      <div className={styles.ItemDetailProduct}>
        <div className={styles.ItemAboutPrice}>
          <Typography
            fontWeight="Light"
            color="grey"
            variant="body1"
            component="h1"
          >
            {idProductSelected.type}
          </Typography>

          <Typography fontWeight="600" mt={2} variant="h4" component="h6">
            {idProductSelected.brand}
          </Typography>
          <Typography
            fontSize="16"
            fontWeight="500"
            variant="h4"
            component="h6"
          >
            {idProductSelected.title}
          </Typography>

          <Typography
            fontWeight="600"
            mt={3}
            mb={2}
            variant="h5"
            component="h6"
          >
            {`S/ ${idProductSelected.price}`}
          </Typography>
        </div>

        <div className={styles.ItemAboutProduct}>
          <h3>About product</h3>
          <div className={styles.accordionBox}>
            <SimpleAccordion idProductSelected={idProductSelected} />
          </div>
        </div>

        <div className={styles.ItemAboutShipping}>
          <h3>Shipping</h3>
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
        </div>
      </div>

      {/* Columna derecha  */}
      <div className={styles.ItemAddProductCart}>
        <div className={styles.orderSummary}>
          <Typography
            mt={1}
            mb={1}
            fontWeight="600"
            variant="h6"
            component="h1"
          >
            Order summary
          </Typography>
        </div>

        <div className={styles.quantityAccount}>
          <div className={styles.quantityStock}>
            <Typography variant="body1" component="h1">
              Quantity
            </Typography>
            <Typography
              ml={1}
              fontWeight="Light"
              color="grey"
              variant="body1"
              component="h1"
            >
              {`(Stock: ${idProductSelected.stock})`}
            </Typography>
          </div>
          <div className={styles.itemCount}>
            <ItemCount stock={idProductSelected.stock} onAdd={onAdd} />
          </div>
        </div>

        <div className={styles.weight}>
          <Typography variant="body1" component="h1">
            Weight
          </Typography>

          <Typography variant="body1" component="h1">
            {idProductSelected.weight} {`Kg.`}
          </Typography>
        </div>

        <div className={styles.type}>
          <Typography variant="body1" component="h1">
            Category
          </Typography>

          <Typography variant="body1" component="h1">
            {idProductSelected.type}
          </Typography>
        </div>

        <div className={styles.delivery}>
          <Typography variant="body1" component="h1">
            Delivery
          </Typography>

          <Typography variant="body1" component="h1">
            {`S/.`} {idProductSelected.delivery}
          </Typography>
        </div>

        <div className={styles.confirmationOrder}>
          <div className={styles.img}>
            <img src={idProductSelected.img} alt="" width={60} height={60} />
          </div>
          <div className={styles.brand}>
            <Typography variant="body1" component="h1">
              {idProductSelected.brand}
            </Typography>
          </div>
          <div className={styles.price}>
            <Typography variant="body1" component="h1">
              {idProductSelected.price}
            </Typography>
          </div>
        </div>

        {/* pasarle como props idProductSelected para poder pintar detalle del producto */}
      </div>
    </div>
  );
};

export default ItemDetailContainer;

//1. useParams() devuelve un objeto. la propiedad será el nombre que le asigna en la ruta dinámica, y el valor es el id que trae del ProductsMock.
// const parameters = useParams();
// console.log("soy el id del producto n°: ", parameters.id)
