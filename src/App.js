import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inventory from './Component/Inventory/Inventory';
import Navbar from './Component/Navbar/Navbar';
import NotFound from './Component/NotFound/NotFound';
import Orders from './Component/Orders/Orders';
import ReviewOrder from './Component/ReviewOrder/ReviewOrder';
import Shop from './Component/Shop/Shop';
import About from './Component/About/About';
import LogIn from './Component/LogIn/LogIn';
import SignUp from './Component/SignUp/SignUp';
import RequerAuth from './Component/RequerAuth/RequerAuth';

function App() {
  return (
    <div className='app' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Orders></Orders>}></Route>
        <Route path='/order-review' element={<ReviewOrder></ReviewOrder>}></Route>
        <Route path='/manage-inventory' element={
          <RequerAuth>
            <Inventory></Inventory>
          </RequerAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
