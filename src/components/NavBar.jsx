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


const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="brand">
        <Image
            borderRadius="full"
            boxSize="40px"
            src="https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dan Abramov"
        />
        <h1>My Watch</h1>
        </div>
        <Menu>
          <MenuButton as={Button}>Marcas</MenuButton>
          <MenuList>
            <MenuItem>Casio</MenuItem>
            <MenuItem>Bulova</MenuItem>
            <MenuItem>Citizen</MenuItem>
            <MenuItem>Fossil</MenuItem>
            <MenuItem>Swatch</MenuItem>
          </MenuList>
        </Menu>
        <Button colorScheme="blue">Button</Button>
        <Button colorScheme="blue">Button</Button>
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;
