import { createContext, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider(props) {
  //info of product in filter
  const [info, setInfo] = useState({});
  const infoProduct = (name, image, features, description, price, size) => {
    info.name = name;
    info.image = image;
    info.features = features;
    info.description = description;
    info.price = price;
    info.size = size
    setInfo(info);
    console.log(info);
  };
  return (
    <ProductsContext.Provider
      value={{
        info,
        setInfo,
        infoProduct
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
