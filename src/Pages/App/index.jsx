import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../Components/NavBar';
import CheckoutSideMenu  from '../../Components/CheckOutSideMenu';
import './App.css';



const AppRoutes = () =>{
  let routes = useRoutes([
    {path:'/',element:<Home/>},
    {path:'/shoes',element:<Home/>},
    {path:'/electronics',element:<Home/>},
    {path:'/furniture',element:<Home/>},
    {path:'/nuevo',element:<Home/>},
    {path:'/others',element:<Home/>},
    {path:'/my-account',element:<MyAccount />},
    {path:'/my-order',element:<MyOrder />},
    {path:'/my-orders',element:<MyOrders />},
    {path:'/my-orders/last',element:<MyOrder />},
    {path:'/my-orders/:id',element:<MyOrder />},
    {path:'/sign-In',element:<SignIn />},
    {path:'/*',element:<NotFound />},
  ])
  return routes;
};
const App = () =>{
return (

  <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      <CheckoutSideMenu/>
    </BrowserRouter>
  </ShoppingCartProvider>
   
  )
}

export default App;