import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutPublic from './Components/Layout/LayoutPublic/LayoutPublic';
import PageHome from './Pages/PageHome/PageHome';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
// import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
// import ConsumiendoApis from './Components/ConsumiendoApis/ConsumiendoApis'


// import ProductList from './Components/ProductsList/ProductsList';
// import Main from './Components/Main/Main'

// // import ItemCount from './Components/ItemCount/ItemCount';

// import PageHome from './Pages/PageHome/PageHome';



function App() {

// const onAdd = ( amountProducts )=> {
//   console.log(`Se agrego al carrito ${amountProducts} productos`)
// }

// let stock = 10;
// let initial = 1;

  return (
    <div>
        <BrowserRouter>
          <Routes>

            <Route
            path="/login"
            element={<Login/>}
            />

            <Route
              path="/"
              element={
                <LayoutPublic>
                  <PageHome/>
                </LayoutPublic>}
            />

      {/* <Route 
        path="/login" 
        element={<PageLogin />} 
      /> */}
            <Route
              path="/cart"
              element={
                <LayoutPublic>
                  <Cart/>
                </LayoutPublic>}
              />

            <Route
              path="/itemDetail/:id"
              element={
                <LayoutPublic>
                  <ItemDetailContainer/>
                </LayoutPublic>}
              />

            <Route 
              path="*" 
              element={<h1> error 404: Not found </h1>} 
              />
          
      
          </Routes>
        </BrowserRouter>
    </div>
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route/>
//     //       path="/"
//     //       element={
//             <LayoutPublic>
//                 <PageHome />
//             </LayoutPublic>
//           // }
//     //   </Routes>
//     // </BrowserRouter>


   


// //       <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
// //        {/* <ItemListContainer tittle={"Bienvenido a Katz Petshop"}/> */}
// //        <ConsumiendoApis/>
// // {/* 
// //       <ProductList/> 
// //     <Main /> */}

    
   
     
     
   
    
  
  );
}

export default App;

//Componente Padre - hijo 
//ItemListContainer - ItemList
//El path de ItemDetailContainer recibe una ruta dinámica

