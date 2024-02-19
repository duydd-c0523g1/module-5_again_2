import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Update from './components/UpdateProduct';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductList></ProductList>}></Route>  
      <Route path='/update/:id' element={<Update></Update>}></Route>  
      <Route path='/create' element={<CreateProduct></CreateProduct>}></Route>  
    </Routes>
  );
}

export default App;
