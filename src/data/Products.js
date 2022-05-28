import { BsCart2 } from "react-icons/bs";

const products = [
  {
    action: "Action",
    image: "",
    title: "Мобильный телефон Nokia 3310 Dual Sim (2017) Синий",
    rating1: "",
    rating2: "",
    rating3: "",
    rating4: "",
    rating5: "",
    grade: "53",

    productId: "Nokia",

    price: "1235",
    cart: <BsCart2/>,
  },
  {},
  {},
];

export function getProducts() {
  return products;
};

