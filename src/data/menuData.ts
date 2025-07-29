import MenuOne from "../../public/assets/img/menu/img-1.jpg";
import MenuTwo from "../../public/assets/img/menu/img-2.jpg";
import MenuThree from "../../public/assets/img/menu/img-3.jpg";
import MenuFour from "../../public/assets/img/menu/img-4.jpg";
import MenuFive from "../../public/assets/img/menu/img-5.jpg";

const menu_data_one = [
  {
    id: 1,
    label: "Home",
    url: "/",
    home_menu: true,
    previewImg:true,
    submenu: [
      {
        id: 1,
        label: "Home 01",
        url: "/",
        img: MenuOne,
      },
      {
        id: 2,
        label: "Home 02",
        url: "/home-two",
        img: MenuTwo,
      },
      {
        id: 3,
        label: "Home 03",
        url: "/home-three",
        img: MenuThree,
      },
      {
        id: 4,
        label: "Home 04",
        url: "/home-four",
        img: MenuFour,
      },
      {
        id: 5,
        label: "Home 05",
        url: "/home-five",
        img: MenuFive,
      },
    ],
  },
  {
    id: 2,
    label: "Pages",
    url: "#",
    submenu: [
      { id: 1, label: "About", url: "/about" },
      { id: 2, label: "Agency", url: "/agency" },
      { id: 3, label: "Agency Details", url: "/agency-details" },
      { id: 4, label: "Faq", url: "/faq" },
      { id: 5, label: "Pricing", url: "/pricing" },
      { id: 6, label: "Agent", url: "/agent" },
      { id: 7, label: "Agent Details", url: "/agent-details" },
      { id: 8, label: "Blog", url: "/blog" },
      { id: 9, label: "Blog Details", url: "/blog-details" },
      { id: 10, label: "Sign up", url: "/sign-up" },
      { id: 11, label: "Sign In", url: "/sign-in" },
      { id: 12, label: "Error", url: "/error" },
      { id: 13, label: "Contact", url: "/contact" },
    ],
  },
  {
    id: 3,
    label: "Real Estate",
    url: "/property-style-1",
    submenu: [
      { id: 1, label: "Property Style 1", url: "/property-style-1" },
      { id: 2, label: "Property Style 2", url: "/property-style-2" },
      { id: 3, label: "Property Style 3", url: "/property-style-3" },
      { id: 4, label: "Property Details 1", url: "/property-details-1" },
      { id: 5, label: "Property Details 2", url: "/property-details-2" },
      { id: 6, label: "Property Details 3", url: "/property-details-3" },
    ],
  },
  {
    id: 4,
    label: "Dashboard",
    url: "/dashboard",
    submenu: [
      { id: 1, label: "Add new property", url: "/dashboard/add-new-property" },
      { id: 2, label: "My Property", url: "/dashboard/property" },
      { id: 3, label: "Favourite", url: "/dashboard/favourite" },
      { id: 4, label: "Review", url: "/dashboard/review" },
      { id: 5, label: "My Profile", url: "/dashboard/my-profile" },
    ],
  },
  {
    id: 5,
    label: "Shop",
    url: "#",
    submenu: [
      { id: 1, label: "Cart", url: "/cart" },
      { id: 2, label: "Checkout", url: "/checkout" },
      { id: 3, label: "Wishlist", url: "/wishlist" },
      { id: 5, label: "Compare", url: "/compare" },
    ],
  },
];

export default menu_data_one;

