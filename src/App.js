import './App.css';
import Home from './componentes/Home';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer';
import { NavBar } from './componentes/NavBar';
import ItemDetalle from './componentes/ItemDetalle';
import Cart from './componentes/Cart';

function App() {
  return (
    <>

<BrowserRouter>
        <div className="App">
            <div>
            <NavBar/>
                <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path="/productos" element={<ItemListContainer greeting="Lista de Productos de Anime"/>}/>
                  <Route path='/productos/:id' element={<ItemDetalle/>}/>      
                  <Route path="/carrito" element={<Cart/>}/>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
