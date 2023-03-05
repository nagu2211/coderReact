import ItemListContainer from './components/ItemListContainer'
import NavBar from "./components/NavBar";
import { ChakraProvider } from '@chakra-ui/react'
import './styles.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bienvenida from './components/Bienvenida';
const App = () => {
  
  return <>
  <BrowserRouter>
  <ChakraProvider>
  <NavBar/>
  
  <Routes>
    <Route exact path='/' element={<Bienvenida/>}/>
    <Route exact path='/catalogo' element={<ItemListContainer/>}/>
    <Route exact path="/marcas/:marcas" element={<ItemListContainer/>}/>
    <Route exact path='/detalles' element={<ItemDetailContainer/>}/>
  </Routes>
  
  </ChakraProvider>  
  </BrowserRouter>
  </>;
};

export default App;
