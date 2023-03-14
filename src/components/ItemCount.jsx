import React, {useState} from "react";
import {
  ButtonGroup,
  Button,
  Text,
  } from "@chakra-ui/react";


const ItemCount = ({stock}) => {
  const [cantidad, setCantidad] = useState(1)
  const sumar = () =>{
    if (cantidad < stock){
      setCantidad(cantidad + 1);
    } else {
      alert("maximo stock disponible")
    }
  }

  const restar = () =>{
    if(cantidad > 1){
      setCantidad(cantidad - 1);
    } else {
      alert("minima cantidad alcanzada");
    }
  }
 return (
    <div>
      
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue" onClick={restar}>
                -
              </Button>
              <Text fontSize="3xl">{cantidad}</Text>
              <Button variant="solid" colorScheme="blue" onClick={sumar}>
                +
              </Button>
              <Button variant="solid" colorScheme="blue">
                Añadir al carrito
              </Button>
            </ButtonGroup>

    </div>
  );
};

export default ItemCount;
