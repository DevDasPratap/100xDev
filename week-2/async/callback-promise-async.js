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
const getPromise = () =>{
return new Promise((resolve, reject)=>{
    console.log('Promise')
    resolve('Success')
    // reject('error')
})
}

const promise = getPromise()
promise.then((res)=>{
    console.log('Promise fullfield: ', res)
})
promise.catch((err)=>{
    console.log('Promise rejected: ', err)
})