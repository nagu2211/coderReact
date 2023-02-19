import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { ChakraProvider, Image} from '@chakra-ui/react'
import './styles.css'

const App = () => {
  return <>
  <ChakraProvider>
  <NavBar/>
  <ItemListContainer greeting={"Bienvenidos a My watch, tu tienda de relojes de confianza"}/>
  <div className="relojes">
  <Image boxSize='300px' src='https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='relojes'/>
  </div>
  </ChakraProvider>
  </>;
};

export default App;
