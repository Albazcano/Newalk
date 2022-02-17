import React from "react";
import { RoutesApp } from './Routes/RoutesApp'
import { ProductsProvider } from './Contex/ProductsContex'

function App() {
  return (
    <ProductsProvider>
    <RoutesApp/>
    </ProductsProvider>
  );
}

export default App;
