export default {
  items: [
    {
      title: true,
      name: '',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cui-chevron-right',
    },
    {
      name: 'All Request',
      url: '/request',
      icon: 'cui-chevron-right',
    },
    // {
    //   name: 'All Pr',
    //   url: '/shoplist',
    //   icon: 'cui-chevron-right',
    // },
    // {
    //   name: 'Add new Shop',
    //   url: '/addshop',
    //   icon: 'cui-chevron-right',
    // },
    // {
    //   name: 'Add Category',
    //   url: '/addcategory',
    //   icon: 'cui-chevron-right',
    // },
    // {
    //   name: 'Add Slider',
    //   url: '/addslider',
    //   icon: 'cui-chevron-right',
    // },
    {
      name: 'All Users',
      url: '/allusers',
      icon: 'cui-chevron-right',
    },
    // {
    //   name: 'All Categories',
    //   url: '/allcategories',
    //   icon: 'cui-chevron-right',
    // },
    // {
    //   name: 'All Sliders',
    //   url: '/allsliders',
    //   icon: 'cui-chevron-right',
    // },
    // {
    //   name: 'All Products',
    //   url: '/allproducts',
    //   icon: 'cui-chevron-right',
    // },
    {
      name: 'All Orders',
      url: '/allorders',
      icon: 'cui-chevron-right',
    },
    
  ],
};
