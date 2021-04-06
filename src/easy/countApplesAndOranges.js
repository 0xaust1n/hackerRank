//apporaching 1 brute force
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let apple = 0;
  apples.forEach((item) => {
    let temp = a + item;
    if (temp >= s && temp <= t) {
      apple++;
    }
  });

  let orange = 0;
  oranges.forEach((item) => {
    let temp = b + item;
    if (temp >= s && temp <= t) {
      orange++;
    }
  });
  console.log(apple);
  console.log(orange);
}
