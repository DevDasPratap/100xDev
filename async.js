function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return n;
}
function findSumTill100() {
  console.log(findSum(100));
}
// busy waiting
function syncSleep() {
  let a = 1;
  for (let i = 0; i < 10000000000; i++) {
    a++;
  }
}
setTimeout(findSumTill100, 1000);
console.log("Hello world");

/**
 * common async function
 setTimeout
 fs.readfile - reafile from filesystem
 fetch - to fetch some data from an API endpoint
 */
