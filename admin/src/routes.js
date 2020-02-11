import React from 'react';
import DefaultLayout from './containers/DefaultLayout';



const Dashboard = React.lazy(() => import('./views/Dashboard'));
const AddCategory = React.lazy(()=>import('./views/AddCategory/AddCategory'))


const AllCategories = React.lazy(()=>import('./views/AllCtegories/AllCategories'));

const AllSliders = React.lazy(()=>import('./views/AllSliders/AllSliders'))

// const Shop = React.lazy(()=>import('./views/Shops/Shop'))
// const AddShop = React.lazy(()=>import('./views/Shops/AddShop'))
const AddSlider = React.lazy(()=>import('./views/AddSlider/AddSlider'))
// const AddCategory = React.lazy(()=>import('./views/Category/AddCategory'))
// const ShopList = React.lazy(()=>import('./views/Shops/ShopList'))
const Orders = React.lazy(()=>import('./views/AllUsers/Order'))
const Order = React.lazy(()=>import('./views/AllUsers/OrderDetails'))
const AlllUsers = React.lazy(()=>import('./views/AllUsers/AllUsers'))
const AllProducts = React.lazy(()=>import('./views/AllProducts/AllProducts'))

const routes = [
  { path: '/allproducts', name: 'All Products', component: AllProducts },
  { path: '/allorders', name: 'All Orders', component: Orders },
  { path: '/orders/:id', exact: true, name: 'Order Details', component: Order },
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/shop/:id', exact: true, name: 'Shop Details', component: Shop },
  { path: '/categories/:id', exact: true, name: 'Shop Details', component: AllCategories },
  // { path: '/addshop', exact: true, name: 'Create Shop', component: AddShop },
  { path: '/addslider', exact: true, name: 'Add Slider', component: AddSlider },
  { path: '/allusers', exact: true, name: 'All Users', component: AlllUsers },
  { path: '/allcategories', exact: true, name: 'All Categories', component: AllCategories },
  { path: '/allsliders', exact: true, name: 'All Sliders', component: AllSliders },
  { path: '/addcategory', exact: true, name: 'Add Category', component: AddCategory },
  // { path: '/shopList', exact: true, name: 'All Shops', component: ShopList },
  


];

export default routes;
