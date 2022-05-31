import { BsCart2 } from "react-icons/bs";
import ratingImage from "../assets/rating1.jpg";
import ratingImage2 from "../assets/rating2.jpg";

import samsung21sImage from "../assets/samsung21s.jpg";
import redmiNote11Image from "../assets/redminote11.jpg";
import sonyxperiaImage from "../assets/sonyxperia.jpg";
import realmec11Image from "../assets/realmec11.jpg";
import iphone12ProMaxImage from "../assets/iphone12promax.jpg";
import huaweiP40ProImage from "../assets/huaweip40pro.jpg";
import honor30Image from "../assets/honor30.jpg";
import googlePixel4xlImage from "../assets/googlepixel4.jpg";



const products = [
  {
    action: "Action..!",
    image: samsung21sImage,
    title: "Specifications Samsung Galaxy A21s 4/64GB (black)",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "53",

    productId: "samsung_21S",

    price: "1235",
    cart: <BsCart2/>,
  },

  {
    action: "Action..!",
    image: redmiNote11Image,
    title: "Xiaomi Redmi Note 11",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "53",

    productId: "redmi_note_11",

    price: "1235",
    cart: <BsCart2/>,
  },


  {
    
    action: "Action..!",
    image: sonyxperiaImage,
    title: "Specifications Sony Xperia (Black)",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "53",

    productId: "sony_xperia",

    price: "1235",
    cart: <BsCart2/>,
  },


  {
    action: "Action..!",
    image: realmec11Image,
    title: "OPPO Realme C11",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "53",

    productId: "oppo_realme_c11",

    price: "1235",
    cart: <BsCart2/>,
  },


  {
    action: "Action..!",
    image: iphone12ProMaxImage,
    title: "Apple iPhone 12 Pro Max",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "53",

    productId: "iphone12_pro_max",

    price: "1235",
    cart: <BsCart2/>,
  },


  {
    action: "Action..!",
    image: huaweiP40ProImage,
    title: "HUAWEI P40 Pro",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "53",

    productId: "huawei_p40_pro",

    price: "1235",
    cart: <BsCart2/>,
  },


  {
    action: "Action..!",
    image: honor30Image,
    title: "Honor p30",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "53",

    productId: "iphone12_pro_max",

    price: "1235",
    cart: <BsCart2/>,
  },


  {
    action: "Action..!",
    image: googlePixel4xlImage,
    title: "Google Pixel 4 XL",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "53",

    productId: "iphone12_pro_max",

    price: "1235",
    cart: <BsCart2/>,
  },
];
export function getProducts() {
  return products;
};

