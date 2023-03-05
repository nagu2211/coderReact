import React from 'react'
import Detalles from '../productos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  return (
    <>
    <ItemDetail Detalles={Detalles}/>
    </>
  )
}

export default ItemDetailContainer