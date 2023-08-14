import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import Formulario from "../../Formulario/Formulario"

const LayoutPublic = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Formulario/>
    </div>
  );
};

export default LayoutPublic;
