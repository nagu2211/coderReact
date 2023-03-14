import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import Productos from "../productos.json";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const {marcas} = useParams()

  const marcFilter = Productos.filter((Producto) => Producto.marca === marcas);
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getData = new Promise(resolve=>{
      setTimeout(()=>{
        {marcas ? resolve(marcFilter) : resolve(Productos)}
      },3000)
    });
    
    getData.then(res => setData(res));
   
  })


  

  return (
    <div>
      <ItemList productos={data}/>
    </div>
  );
};

export default ItemListContainer;
