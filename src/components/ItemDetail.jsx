import React from "react";
import { Card, CardBody, CardFooter,Stack,Image,Heading,Text,Divider,Badge, Center } from '@chakra-ui/react'
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
const ItemDetail = ({ Detalles }) => {
  const {id} = useParams();

  const detailFilter = Detalles.filter((detalle) => detalle.id == id);
  return (
    <>
      {detailFilter.map((detalle) => (
        <div key={detalle.id}>
          <Center>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={detalle.img}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{detalle.nombre}</Heading>
                <Text>
                  {detalle.descripcion}
                </Text>
                <Badge colorScheme='green'>stock disponible : {detalle.stock}</Badge>
                <Badge colorScheme='red'>precio : $ {detalle.precio} ARS</Badge>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ItemCount stock={detalle.stock}/>
            </CardFooter>
          </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
