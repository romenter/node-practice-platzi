const sharp = require("sharp");

sharp(
  "https://static.platzi.com/media/public/uploads/original_219068e1-0543-480f-9f1b-e0844c5e06d2.png"
)
  .resize(80)
  .toFile("resized.png");


