

const menu_data_one = [
  {
    id: 1,
    label: "Home",
    url: "/",
    home_menu: true,
    previewImg:true,
   
  },
   {
    id: 2,
    label: "Properties",
    url: "/properties",
 
  },
     {
    id: 5,
    label: "Services",
    url: "/services",
 
  },

   {
    id: 3,
    label: "Pages",
    url: "#",
    submenu: [
 
      { id: 2, label: "Agency", url: "/agency-details" },
      { id: 4, label: "Faq", url: "/faq" },
      { id: 5, label: "Pricing", url: "/pricing" },
      { id: 10, label: "Sign up", url: "/sign-up" },
      // { id: 11, label: "Contact", url: "/contact" },
    ],
  },
  {
    id: 4,
    label: "Dashboard",
    url: "/dashboard/add-new-property",
    submenu: [
      { id: 1, label: "Add new property", url: "/dashboard/add-new-property" },
      { id: 2, label: "My Property", url: "/dashboard/property" },
      // { id: 3, label: "Favourite", url: "/dashboard/favourite" },
      { id: 4, label: "Review", url: "/dashboard/review" },
      { id: 5, label: "My Profile", url: "/dashboard/my-profile" },
    ],
  },
  // {
  //   id: 5,
  //   label: "Shop",
  //   url: "#",
  //   submenu: [
  //     { id: 1, label: "Cart", url: "/cart" },
  //     { id: 2, label: "Checkout", url: "/checkout" },
  //     { id: 3, label: "Wishlist", url: "/wishlist" },
  //     { id: 5, label: "Compare", url: "/compare" },
  //   ],
  // },
];

export default menu_data_one;

