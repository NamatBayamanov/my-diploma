import ratingImage from "../assets/rating1.jpg";
import ratingImage2 from "../assets/rating2.jpg";
import { BsCart2 } from "react-icons/bs";
import headphonesImage from "../assets/headphones.jpg";

import casesImage from "../assets/cases.jpg";
import stickersImage from "../assets/stickers1.jpg";
import chargingImage from "../assets/charging.jpg";

const categories = [
  {
    novelty: "Novelty",
    image: casesImage,
    title: "Different cases",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "74",

    categoryId: "cases_for_smartphones",

    price: "___",
    cart: <BsCart2/>,


    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Released 2019, October 22 193g, 8.2mm thickness Android 10, up to Android 12 64GB/128GB storage, no card slot 160.4 x 75.1 x 8.2 mm (6.31 x 2.96 x 0.32 in) 193 g (6.81 oz) Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), aluminum frame Nano-SIM and/or eSIM IP68 dust/water resistant (up to 1.5m for 30 mins) P-OLED, 90Hz, HDR 6.3 inches, 98.0 cm2 (~81.3% screen-to-body ratio) 1440 x 3040 pixels, 19:9 ratio (~537 ppi density) Corning Gorilla Glass 5 Always-on display Android 10, upgradable to Android 12 Qualcomm SM8150 Snapdragon 855 (7 nm) Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485) Adreno 640 64GB 6GB RAM, 128GB 6GB RAM",
  },
  {
    novelty: "Novelty",
    image: headphonesImage,
    title: "Different headphones",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "86",

    categoryId: "comfortable_headphones",

    price: "___",
    cart: <BsCart2/>,


    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Released 2019, October 22 193g, 8.2mm thickness Android 10, up to Android 12 64GB/128GB storage, no card slot 160.4 x 75.1 x 8.2 mm (6.31 x 2.96 x 0.32 in) 193 g (6.81 oz) Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), aluminum frame Nano-SIM and/or eSIM IP68 dust/water resistant (up to 1.5m for 30 mins) P-OLED, 90Hz, HDR 6.3 inches, 98.0 cm2 (~81.3% screen-to-body ratio) 1440 x 3040 pixels, 19:9 ratio (~537 ppi density) Corning Gorilla Glass 5 Always-on display Android 10, upgradable to Android 12 Qualcomm SM8150 Snapdragon 855 (7 nm) Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485) Adreno 640 64GB 6GB RAM, 128GB 6GB RAM",
  },
  {
    novelty: "Novelty",
    image: stickersImage,
    title: "Different stickers",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "71",

    categoryId: "stickers_for_smartphones",

    price: "___",
    cart: <BsCart2/>,


    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Released 2019, October 22 193g, 8.2mm thickness Android 10, up to Android 12 64GB/128GB storage, no card slot 160.4 x 75.1 x 8.2 mm (6.31 x 2.96 x 0.32 in) 193 g (6.81 oz) Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), aluminum frame Nano-SIM and/or eSIM IP68 dust/water resistant (up to 1.5m for 30 mins) P-OLED, 90Hz, HDR 6.3 inches, 98.0 cm2 (~81.3% screen-to-body ratio) 1440 x 3040 pixels, 19:9 ratio (~537 ppi density) Corning Gorilla Glass 5 Always-on display Android 10, upgradable to Android 12 Qualcomm SM8150 Snapdragon 855 (7 nm) Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485) Adreno 640 64GB 6GB RAM, 128GB 6GB RAM",
  },
  {
    novelty: "Novelty",
    image: chargingImage,
    title: "Different charging",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "71",

    categoryId: "powerful_chargings",

    price: "___",
    cart: <BsCart2/>,


    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Released 2019, October 22 193g, 8.2mm thickness Android 10, up to Android 12 64GB/128GB storage, no card slot 160.4 x 75.1 x 8.2 mm (6.31 x 2.96 x 0.32 in) 193 g (6.81 oz) Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), aluminum frame Nano-SIM and/or eSIM IP68 dust/water resistant (up to 1.5m for 30 mins) P-OLED, 90Hz, HDR 6.3 inches, 98.0 cm2 (~81.3% screen-to-body ratio) 1440 x 3040 pixels, 19:9 ratio (~537 ppi density) Corning Gorilla Glass 5 Always-on display Android 10, upgradable to Android 12 Qualcomm SM8150 Snapdragon 855 (7 nm) Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485) Adreno 640 64GB 6GB RAM, 128GB 6GB RAM",
  },
];

export function getCategories() {



  return categories;
}


export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category => category.categoryId === categoryId
    )
  ];
}




