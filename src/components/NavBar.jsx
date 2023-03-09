import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="navbar">
      <Link to='/'>
        <div className="brand">
          
        <Image
            borderRadius="full"
            boxSize="40px"
            src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dan Abramov"
        />
        <h1>My Watch</h1>
        
        </div>
        </Link>
        <Menu>
          <Link to="/catalogo">
        <Button colorScheme="blue">Catalogo</Button>
        </Link>
          <MenuButton as={Button}>Marcas</MenuButton>
          <MenuList>
            <Link to={`/marcas/${"CASIO"}`}>
            <MenuItem>Casio</MenuItem>
            </Link>
            <Link to={`/marcas/${"BULOVA"}`}>
            <MenuItem>Bulova</MenuItem>
            </Link>
            <Link to={`/marcas/${"CITIZEN"}`}>
            <MenuItem>Citizen</MenuItem>
            </Link>
            </MenuList>
        </Menu>
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;
