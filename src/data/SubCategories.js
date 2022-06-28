import bumperImage from "../assets/bamper_case.jpg";
import coverImage from "../assets/cover_pad.jpg";
import bookImage from "../assets/cover_book.jpg";
import flipImage from "../assets/flip_case.jpg";
import rubberImage from "../assets/rubber_case.jpg";
import texttileImage from "../assets/texttile_case.jpg";

import hImage from "../assets/earphones/h.webp";
import sImage from "../assets/earphones/s.webp";
import eImage from "../assets/earphones/e.webp";
import tImage from "../assets/stickers/t.webp";
import cImage from "../assets/charging/c.webp";
import iImage from "../assets/charging/i.webp";
// rubber_case.jpg
const subCategories = [
  {
    title: "Bumper case ",
    image: bumperImage,
    subCategoryId: "bumper_case",
    description: "Bumper cases are made of shock-absorbing materials, protecting phone against bumps. They are good alternatives to traditional cases, because you can show off the design and colours of your smartphones.",
  },
  {
    title: "Cover-pad",
    image: coverImage,          
    subCategoryId: "cover_pad",

    description: "Cases, which are designed to attach to, support, or otherwise hold a smartphone, are popular accessories. Case measures are based on the display inches (e.g. 5 inch display)",
  },
  {
    title: "Case book",
    image: bookImage,
    subCategoryId: "case_book",

    description: "For overall device protection, a case, which covers the corners, edges and back of a smartphone, is your best bet. A good case will protect your phone from scratches and absorb impact in those areas when your device is dropped",
  },
  {
    title: "Flip case",
    image: flipImage,
    subCategoryId: "flip_case",

    description: "Find premium phone cases and covers to protect your smartphone for a lifetime of use",
  },
  {
    title: "Rubber",
    image: rubberImage,
    subCategoryId: "rubber_case",

    description: "Cases, which are designed to attach to, support, or otherwise hold a smartphone, are popular accessories. Case measures are based on the display inches (e.g. 5 inch display)",
  },
  {
    title: "Textile",
    image: texttileImage,
    subCategoryId: "texttile_case",

    description: "For overall device protection, a case, which covers the corners, edges and back of a smartphone, is your best bet. A good case will protect your phone from scratches and absorb impact in those areas when your device is dropped",
  },
  {
    title: "Noise-cancelling",
    image: hImage,
    subCategoryId: "noise-cancelling",
    description: "Noise-cancelling headphones reduce unwanted ambient sounds using active noise control. This is distinct from passive headphones which, if they reduce ambient sounds at all, use techniques such as soundproofing Noise cancellation makes it possible to listen to audio content without raising the volume excessively. It can also help a passenger sleep in a noisy vehicle such as an airliner.",
  },
  {
    title: "Supra-aural",
    image: sImage,
    subCategoryId: "supra-aural",
    description: "Supra-aural headphones are headphones with ear cups designed to rest on your ears instead of around your ears.You may also know supra-aural headphones as on-ear headphones.",
  },
  {
    title: "Earbud",
    image: eImage,
    subCategoryId: "earbud",
    description: "Earphones (also called in-ear headphones or in-ears) are inserted into the ear canal, and earbuds rest outside the ear canal.",
  },
  {
    title: "For good a mood",
    image: tImage,
    subCategoryId: "mood",
    description: "It is our private sticker for you to memorise us with respectfully",
  },

  {
    title: "Charging",
    image: cImage,
    subCategoryId: "charging",
    description: "A trickle charger provides a relatively small amount of current, only enough to counteract self-discharge of a battery that is idle for a long time.",
  },
  {
    title: "Inductive charging",
    image: iImage,
    subCategoryId: "inductive charging",
    description: "Inductive charging (also known as wireless charging or cordless charging) is a type of wireless power transfer",
  },
  // -------


  // {
  //   title: "Bumper case ",
  //   image: bumperImage,
  //   subCategoryId: "bumper_case",
  //   description: "Bumper cases are made of shock-absorbing materials, protecting phone against bumps. They are good alternatives to traditional cases, because you can show off the design and colours of your smartphones.",
  // },
  // {
  //   title: "Cover-pad",
  //   image: coverImage,          
  //   subCategoryId: "cover_pad",

  //   description: "Cases, which are designed to attach to, support, or otherwise hold a smartphone, are popular accessories. Case measures are based on the display inches (e.g. 5 inch display)",
  // },
  // {
  //   title: "Case book",
  //   image: bookImage,
  //   subCategoryId: "case_book",

  //   description: "For overall device protection, a case, which covers the corners, edges and back of a smartphone, is your best bet. A good case will protect your phone from scratches and absorb impact in those areas when your device is dropped",
  // },
  // {
  //   title: "Flip case",
  //   image: flipImage,
  //   subCategoryId: "flip_case",

  //   description: "Find premium phone cases and covers to protect your smartphone for a lifetime of use",
  // },
  // {
  //   title: "Rubber",
  //   image: rubberImage,
  //   subCategoryId: "rubber_case",

  //   description: "Cases, which are designed to attach to, support, or otherwise hold a smartphone, are popular accessories. Case measures are based on the display inches (e.g. 5 inch display)",
  // },
  // {
  //   title: "Textile",
  //   image: texttileImage,
  //   subCategoryId: "texttile_case",

  //   description: "For overall device protection, a case, which covers the corners, edges and back of a smartphone, is your best bet. A good case will protect your phone from scratches and absorb impact in those areas when your device is dropped",
  // },
  // {
  //   title: "Noise-cancelling",
  //   image: hImage,
  //   subCategoryId: "noise-cancelling",
  //   description: "Noise-cancelling headphones reduce unwanted ambient sounds using active noise control. This is distinct from passive headphones which, if they reduce ambient sounds at all, use techniques such as soundproofing Noise cancellation makes it possible to listen to audio content without raising the volume excessively. It can also help a passenger sleep in a noisy vehicle such as an airliner.",
  // },
  // {
  //   title: "Supra-aural",
  //   image: sImage,
  //   subCategoryId: "supra-aural",
  //   description: "Supra-aural headphones are headphones with ear cups designed to rest on your ears instead of around your ears.You may also know supra-aural headphones as on-ear headphones.",
  // },
  // {
  //   title: "Earbud",
  //   image: eImage,
  //   subCategoryId: "earbud",
  //   description: "Earphones (also called in-ear headphones or in-ears) are inserted into the ear canal, and earbuds rest outside the ear canal.",
  // },
  // {
  //   title: "For good a mood",
  //   image: tImage,
  //   subCategoryId: "mood",
  //   description: "It is our private sticker for you to memorise us with respectfully",
  // },

  // {
  //   title: "Charging",
  //   image: cImage,
  //   subCategoryId: "charging",
  //   description: "A trickle charger provides a relatively small amount of current, only enough to counteract self-discharge of a battery that is idle for a long time.",
  // },
  // {
  //   title: "Inductive charging",
  //   image: iImage,
  //   subCategoryId: "inductive charging",
  //   description: "Inductive charging (also known as wireless charging or cordless charging) is a type of wireless power transfer",
  // },
];

export function getSubCategories() {
  return subCategories;
}

export function  getSubCategory(subCategoryId) {
  return subCategories [
    subCategories.findIndex(subCategory =>
      subCategory.subCategoryId === subCategoryId)
  ];
}