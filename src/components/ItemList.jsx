import React from 'react'
import { Container } from '@chakra-ui/react'
import Item from './Item'
const itemList = ({productos}) => {
  return (
    
    <>
    <Container maxW="100%" className='main-catalogo'>
    {productos.map((producto) => (
        <Item
        key={producto.id}
        id={producto.id}
        nombre={producto.nombre}
        precio={producto.precio}
        stock={producto.stock}
        marca={producto.marca}
        img={producto.img}
        />
    ))}
    </Container>
    
    </>
  )
}

export default itemList