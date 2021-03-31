// approaching -1  brute force
function climbingLeaderboard(scores, alice) {
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
        count++;
      }
    }
    result.push(count);
  });
  return result;
}
