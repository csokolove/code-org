const randomNumber = require('../../src/lib/randomNumber');

// CURRENTLY DISFUNCTIONAL.
/*
Currently pending addition of:
- penColor
- dot
- penUp
- moveTo
- getX
- getY
*/

// Draw a cloud mass using randomly sized dots at random locations near each other.
penColor("skyblue");
dot(300);
penUp();
penRGB(245, 245, 245,0.3);
moveTo(randomNumber(0, 320),randomNumber(0, 450));
for (var i = 0; i < 50; i++) {
  moveTo(getX()+randomNumber(-25, 25),getY()+randomNumber(-25, 25));
  dot(randomNumber(25,50));
}