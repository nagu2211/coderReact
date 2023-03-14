import React,{useState,useEffect} from 'react'
import Detalles from '../productos.json'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const {id} = useParams();

  const detailFilter = Detalles.filter((detalle) => detalle.id == id);

  const [detalles,setDetalles] = useState([]);

  useEffect(() => {
    const getDetails = new Promise(resolve=>{
      setTimeout(()=>{
        resolve(detailFilter)
      },3000)
    });
    
    getDetails.then(res => setDetalles(res));
   
  })

  return (
    <>
    <ItemDetail Detalles={detalles}/>
    </>
  )
}

export default ItemDetailContainer