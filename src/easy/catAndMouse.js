function catAndMouse(x, y, z) {
  let a = Math.abs(z - x); // a cat distance with mice
  let b = Math.abs(z - y); //b cat distance with mice
  let result = '';
  if (a < b) {
    result = 'Cat A';
  } else if (a > b) {
    result = 'Cat B';
  } else {
    result = 'Mouse C';
  }

  return result;
}

function test() {
  let x = 1;
  let y = 2;
  let z = 3;
  let ans = catAndMouse(x, y, z);
  console.log(ans);
}

test();
