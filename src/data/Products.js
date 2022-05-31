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

    price: "569",
    cart: <BsCart2/>,


    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Released 2020, June 02 192g, 8.9mm thickness Android 10, up to Android 11, One UI 3.1 32GB/64GB/128GB storage, microSDXC 163.7 x 75.3 x 8.9 mm (6.44 x 2.96 x 0.35 in) 192 g (6.77 oz) Glass front, plastic frame, plastic back Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by) PLS LCD 6.5 inches, 102.0 cm2 (~82.8% screen-to-body ratio) 720 x 1600 pixels, 20:9 ratio (~270 ppi density) Android 10, upgradable to Android 11, One UI 3.1 Exynos 850 (8nm) Octa-core (4x2.0 GHz Cortex-A55 & 4x2.0 GHz Cortex-A55) Mali-G52 microSDXC (dedicated slot) 32GB 2GB RAM, 32GB 3GB RAM, 32GB 4GB RAM, 64GB 3GB RAM, 64GB 4GB RAM, 64GB 6GB RAM, 128GB 3GB RAM, 128GB 4GB RAM, 128GB 6GB RAM eMMC 5.1",
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


    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Released 2022, February 09179g, 8.1mm thickness Android 11, MIUI 13 64GB/128GB storage, microSDXC 159.9 x 73.9 x 8.1 mm (6.30 x 2.91 x 0.32 in) 179 g (6.31 oz) Dual SIM (Nano-SIM, dual stand-by) IP53, dust and splash resistant AMOLED, 90Hz, 700 nits, 1000 nits (peak) 6.43 inches, 99.8 cm2 (~84.5% screen-to-body ratio) 1080 x 2400 pixels, 20:9 ratio (~409 ppi density) Corning Gorilla Glass 3 Android 11, MIUI 13 Qualcomm SM6225 Snapdragon 680 4G (6 nm) Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver) Adreno 610",
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

    price: "750",
    cart: <BsCart2/>,


    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Released 2019, February 27 162g, 8.4mm thickness Android 9.0 64GB storage, microSDXC 156 x 68 x 8.4 mm (6.14 x 2.68 x 0.33 in) 162 g (5.71 oz) Glass front (Gorilla Glass 5), plastic back, plastic frame Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by) IPS LCD 6.0 inches, 84.1 cm2 (~79.3% screen-to-body ratio)	1080 x 2520 pixels, 21:9 ratio (~457 ppi density)	Corning Gorilla Glass 5  Android 9.0 (Pie)	Qualcomm SDM630 Snapdragon 630 (14 nm) Octa-core 2.2 GHz Cortex-A53	Adreno 508",
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

    price: "295",
    cart: <BsCart2/>,

    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Released 2020, Jule 07 196g, 9.1mm thickness Android 10, Realme UI 32GB storage, microSDXC 164.4 x 75.9 x 9.1 mm (6.47 x 2.99 x 0.36 in) 196 g (6.91 oz)	Dual SIM (Nano-SIM, dual stand-by) IPS LCD 6.5 inches, 103.7 cm2 (~83.1% screen-to-body ratio) 720 x 1560 pixels, 19.5:9 ratio (~264 ppi density) Android 10, Realme UI MediaTek MT6765G Helio G35 (12 nm) Octa-core (4x2.3 GHz Cortex-A53 & 4x1.8 GHz Cortex-A53) PowerVR GE8320 microSDXC (dedicated slot) 32GB 2GB RAM, 32GB 3GB RAM eMMC 5.1",
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

    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Released 2020, November 13 228g, 7.4mm thickness iOS 14.1, up to iOS 15.5 128GB/256GB/512GB storage, no card slot 160.8 x 78.1 x 7.4 mm (6.33 x 3.07 x 0.29 in) 228 g (8.04 oz) Glass front (Gorilla Glass), glass back (Gorilla Glass), stainless steel frame Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM, dual stand-by) - for China IP68 dust/water resistant (up to 6m for 30 mins) Apple Pay (Visa, MasterCard, AMEX certified) Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak) 6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio) 1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density) Scratch-resistant ceramic glass, oleophobic coating Wide color gamut True-tone  OS 14.1, upgradable to iOS 15.5 Apple A14 Bionic (5 nm) Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm) Apple GPU (4-core graphics) Card slot	No 128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM NVMe",
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

    price: "650",
    cart: <BsCart2/>,


    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Size: 6.58 inches *With a rounded corners design on the display, the diagonal length of the screen is 6.58 inches when measured according to the standard rectangle (the actual viewable area is slightly smaller). Colour: 16.7 million colours Type: OLED, up to 90 Hz frame refresh rate Resolution: 2640 x 1200 Pixels  *The resolution measured as a standard rectangle, with a rounded corners design, the effective pixels are slightly less. HUAWEI Kirin 990 5G CPU: Octa-core 2 x Cortex-A76 Based 2.86 GHz + 2 x Cortex-A76 Based 2.36 GHz + 4 x Cortex-A55 1.95 GHz GPU: 16-Core Mali-G76 NPU: Dual Big Core + Tiny Core NPUs (Neural-network Processing Unit) 8 GB RAM + 256 GB ROM *The available internal storage may be smaller as part of the internal storage is occupied by software. Actual memory space may change due to application updates, user operations, and other related factors. External Memory Support: NM SD Card, up to 256 GB *sold separately",
  },


  {
    action: "Action..!",
    image: honor30Image,
    title: "Honor 30",
    rating1: ratingImage,
    rating2: ratingImage,
    rating3: ratingImage,
    rating4: ratingImage2,
    rating5: ratingImage2,
    grade: "53",

    productId: "honor_30",

    price: "465",
    cart: <BsCart2/>,


    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Honor 30 - 6.53 inches, 20:9, 2400 x 1080 pixels, OLED. Honor 30 Pro - 6.57 inches, 19.5:9, 2340 x 1080 pixels, OLED, 90 Hz (for Honor 30 Pro +) Honor 30 - Huawei Kirin 985, 8 cores, 2.58 GHz, 7 nm, GPU Mali-G77. Honor 30 Pro - Huawei Kirin 990 5G, 8 cores, 2.86 GHz, 7 nm, GPU Mali-G76MP16 Honor 30 - operational 6/8 GB, built-in 128/256 GB, a separate slot for a Nano Memory card. Honor 30 Pro - operational 8/12 GB, built-in 128/256 GB, a separate slot for a Nano Memory card Honor 30 - 160.3 x 74.2 x 8.1mm, 185g Honor 30 Pro - 160.3 x 73.6 x 8.4, 186g (190g Honor 30 Pro+) 5G, LTE, Wi-Fi 802.11 a/b/g/n/ac/ax, Bluetooth 5.1, NFC, GPS, A-GPS, NFC, USB-C, OTG",
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

    productId: "google_pixel_4xl",

    price: "849",
    cart: <BsCart2/>,


    shortInformation: "(Short information)",

    buy: "Buy...",


    description: "Released 2019, October 22 193g, 8.2mm thickness Android 10, up to Android 12 64GB/128GB storage, no card slot 160.4 x 75.1 x 8.2 mm (6.31 x 2.96 x 0.32 in) 193 g (6.81 oz) Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), aluminum frame Nano-SIM and/or eSIM IP68 dust/water resistant (up to 1.5m for 30 mins) P-OLED, 90Hz, HDR 6.3 inches, 98.0 cm2 (~81.3% screen-to-body ratio) 1440 x 3040 pixels, 19:9 ratio (~537 ppi density) Corning Gorilla Glass 5 Always-on display Android 10, upgradable to Android 12 Qualcomm SM8150 Snapdragon 855 (7 nm) Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485) Adreno 640 64GB 6GB RAM, 128GB 6GB RAM",
  },
];
export function getProducts() {
  return products;
};

export function getProduct(productId) {
  return products[
    products.findIndex(
      product => product.productId === productId
    )
  ];
}
