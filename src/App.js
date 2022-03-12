import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import Shop from './componets/Shop/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderReview from './componets/OrderReview/OrderReview';
import Inventory from './componets/Inventory/Inventory';
import NotFound from './componets/NotFound/NotFound';
import PlaceOrder from './componets/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      
      

      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Shop />} />
        <Route  path='/shop' element={<Shop />} />
        <Route  path='/review' element={<OrderReview />} />
        <Route  path='/inventory' element={<Inventory />} />
        <Route  path='/placeOrder' element={<PlaceOrder />} />
    
        <Route  path='*' element={<NotFound />} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
