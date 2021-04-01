// approaching - 1  brute force
function bruteForce(scores, alice) {
  let rank = [];
  for (let i = 0; i < scores.length; i++) {
    if (!rank.includes(scores[i])) {
      rank.push(scores[i]);
    }
  }
  rank.sort((a, b) => b - a); // sort by decreasing
  let result = [];
  alice.forEach((player) => {
    let count = 1;
    for (let j = 0; j < rank.length; j++) {
      if (rank[j] > player) {
        count++;
      }
    }
    rank.push(count);
  });
  return result;
}

// approaching - 2 binary search
function climbingLeaderboard(scores, alice) {
  let set = new Set(scores);
  let rank = Array.from(set);
  let result = [];
  alice.forEach((player) => {
    let position = 1;
    if (rank.length > 1) {
      //if  rank only 1 element return 1;
      position = binarySearchPositiion(rank, player);
    }
    result.push(position);
  });
  return result;
}

function binarySearchPositiion(arr, value) {
  let head = 0;
  let tail = arr.length - 1;
  let position = arr.length + 1;
  //handle value outbound array situation
  if (value > arr[0]) {
    return 1;
  }
  if (value < arr[tail]) {
    return arr.length + 1;
  }
  // start binary search in reverse sort
  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);
    if (value == arr[mid]) {
      position = mid + 1;
      // return real postion cuz position start from zero
      break;
    } else if (value < arr[mid] && value > arr[mid + 1]) {
      position = mid + 2;
      //return real next postion
      break;
    } else if (value < arr[mid]) {
      head = mid + 1;
    } else {
      tail = mid - 1;
    }
  }
  return position;
}
