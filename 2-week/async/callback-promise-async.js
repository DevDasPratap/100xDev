// set time out async pre default function my own time

// function hello() {
//     console.log('Heleo....')
// }
// setTimeout(hello, 4000);

// or
// setTimeout(() => {
//   console.log("Hi");
// }, 5000);

// callback function is a function passed an argument to another function
// function sum(a, b) {
//   console.log(a + b);
//   return;
// }
// function cal(a, b, sumCallBack) {
//   sumCallBack(a, b);
// }
// cal(1, 2, sum);

// callback hell
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data: ", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 4000);
// }

// getData(10)
// getData(16)

// console.log("Getting data 1");
// getData(1, () => {
//   console.log("Getting data 2");
//   getData(2, () => {
//     console.log("Getting data 3");
//     getData(3, () => {
//       console.log("Getting data 4");
//       getData(4, () => {
//         console.log("Complete callback hell");
//       });
//     });
//   });
// });

// Promise

// const promise = new Promise((resolve, reject)=>{
//     console.log('Promise')
//     console.log(Promise)
// })
// console.log(promise)

// API promise
// function getData(dataId, getNextData) {
// return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("Data: ", dataId);
//       resolve('success')
//     // reject('error') //check on browser because node was crash
//       if (getNextData) {
//         getNextData();
//       }
//     }, 4000)
// })
// }

// const result = getData(22)
// console.log('Result: ', result)
// setTimeout(() => {
//     console.log('Result after resolve: ', result)
// }, 7000);

// with then catch
// const getPromise = () =>{
// return new Promise((resolve, reject)=>{
//     console.log('Promise')
//     resolve('Success')
//     // reject('error')
// })
// }

// const promise = getPromise()
// promise.then((res)=>{
//     console.log('Promise fullfield: ', res)
// })
// promise.catch((err)=>{
//     console.log('Promise rejected: ', err)
// })

// callback with callback hell
// function loadingData(callback) {
//     setTimeout(()=>{
//         console.log('1. Loading Data')
//         callback()
//     }, 4000)
// }
// function collectingData(callback) {
//     setTimeout(()=>{
//     console.log('2. Collecting Data')
//     callback()
// }, 1000)
// }
// function approvingData(callback) {
//     setTimeout(()=>{
//     console.log('3. Approving Data')
//     callback()
// }, 5000)
// }
// function approved() {
//     console.log('4. Approved Data')
// }

// loadingData(function () {
//     collectingData(function () {
//         approvingData(function () {
//             approved()
//         })
//     })
// })

// promise

function loadingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. Loading Data");
      resolve('load successfully');
    }, 4000);
  });
}
function collectingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. Collecting Data");
      resolve('full fill');
    }, 1000);
  });
}
function approvingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. Approving Data");
      reject('not full fill');
    }, 5000);
  });
}

function approved() {
  console.log("4. Approved Data");
}

// promise
// loadingData()
// .then(collectingData)
// .then(approvingData)
// .then(approved)
// .catch((err)=>{
//     console.log(err)
// })

// async
// async function asyncFn() {
//     await loadingData()
//     await collectingData()
//     await approvingData()
//     await approved()
// }
// asyncFn().catch((err)=>{
//     console.log(err)
// })

// error handaling
// try catch throw
// function tct(a,b) {
//     return a/b
// }
// console.log(tct(10, 0))
// function tct(a,b) {
//     try {
//         if (b === 0) {
//             throw new Error(`can't divide by 0`)
//         }else{
//             return a/b
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// console.log(tct(10, 5))

// Higher order function
const num = [10, 16, 22, 36, 90]
const a = num.map((val)=>{
    return val + 5
})
console.log('Map: ', a) //new array
console.log('Orginal: ',num) //orginal array

const b = num.filter((val)=>{
    if (val >= 10 && val <= 25) {
        return val
    }
})
console.log('Filter: ', b)
console.log('Orginal: ',num) //orginal array

