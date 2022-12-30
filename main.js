// const imagemin = require("imagemin");
// const imageminWebp = require("imagemin-webp");

import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

imagemin(["./input/*.{jpg,png}"], {
  destination: "./output",
  plugins: [
    imageminWebp({
      //   quality: 90
      //   ,
      //   resize: {
      //     width: 1000,
      //     height: 0
      //   }
    }),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});
