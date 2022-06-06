import bumperImage from "../assets/bamper_case.jpg";
import coverImage from "../assets/cover_pad.jpg";
import bookImage from "../assets/cover_book.jpg";
import flipImage from "../assets/flip_case.jpg";
import rubberImage from "../assets/rubber_case.jpg";
import texttileImage from "../assets/texttile_case.jpg";

const subCategories = [
  {
    title: "Bumper case ",
    image: bumperImage,
    subCategoryId: "bumper_case",
  },
  {
    title: "Cover-pad ...",
    image: coverImage,
    subCategoryId: "cover_pad",
  },
  {
    title: "Case book ...",
    image: bookImage,
    subCategoryId: "case_book",
  },
  {
    title: "Flip case...",
    image: flipImage,
    subCategoryId: "flip_case",
  },
  {
    title: "Rubber ...",
    image: rubberImage,
    subCategoryId: "rubber_case",
  },
  {
    title: "Textile",
    image: texttileImage,
    subCategoryId: "texttile_case",
  },
  
];

export function getSubCategories() {
  return subCategories;
}

