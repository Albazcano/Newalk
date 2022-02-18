import { createContext, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider(props) {
  //info of product in filter
  const [info, setInfo] = useState({});
  return (
    <ProductsContext.Provider
      value={{
        info,
        setInfo
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
