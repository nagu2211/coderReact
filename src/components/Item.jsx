import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
  Image,
  Badge,
  Divider,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

const Item = ({ id, marca, nombre, img, stock }) => {
  return (
    <div className="itemCards">
      <div key={id}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={img}
          />

          <Stack>
            <CardBody>
              <Badge>{marca}</Badge>
              <Heading size="md">{nombre}</Heading>
              <Badge colorScheme='green'>stock disponible : {stock}</Badge>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link to="/detalles">
              <Button variant="solid" colorScheme="blue">
                Detalles
              </Button>
              </Link>
            </CardFooter>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

export default Item;
