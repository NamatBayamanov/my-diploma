import { BsCart2 } from "react-icons/bs";
import ratingImage from "../assets/rating.jpg";
import ratingImage2 from "../assets/rating2.jpg";

import samsung21sImage from "../assets/samsung21s.jpg";

const products = [
  {
    action: "Action!",
    image: samsung21sImage,
    title: "Мобильный телефон Nokia 3310 Dual Sim (2017) Синий",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "53",

    productId: "samsung",

    price: "1235",
    cart: <BsCart2/>,
  },
  {},
  {},
  {},
];

export function getProducts() {
  return products;
};

