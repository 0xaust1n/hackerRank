function getPerformance(method) {
  const { performance } = require('perf_hooks');
  let begin = performance.now();
  method();
  let end = performance.now();
  console.log('The time that your program cost is ' + (end - begin).toFixed(2) + 'milliseconds.');
}
