import React from "react";
import ItemList from "./ItemList";
import Productos from "../productos.json";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const {marcas} = useParams()

  const marcFilter = Productos.filter((Producto) => Producto.marca === marcas);
  return (
    <div>
      {marcas ? <ItemList productos={marcFilter} /> : <ItemList productos={Productos}/> };
    </div>
  );
};

export default ItemListContainer;
