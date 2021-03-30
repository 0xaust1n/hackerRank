function timeConversion(s) {
  /*
   * Write your code here.
   */
  let time = s.split('');
  let carry = 0;
  let result = '';
  if (time[8] == 'A') {
    if (time[0] + time[1] == '12') {
      time[0] = 0;
      time[1] = 0;
    }
    time = time.splice(0, 8);
    result = time.join('');
  } else {
    if (time[0] + time[1] != '12') {
      let mins = (parseInt(time[1]) + 2) % 12;
      time[1] = mins.toString();
      if (mins / 12 == 1) {
        carry++;
      }
      let hour = parseInt(time[0]) + 1 + carry;
      time[0] = hour.toString();
    }

    time = time.splice(0, 8);
    result = time.join('');
  }
  return result;
}
