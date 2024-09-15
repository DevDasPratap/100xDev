// let count = 0
// const counter = ()=>{
//     count++
//     console.log(`The counter is an ${count}`)
// }

// setInterval(counter, 1000)

// let counter = 0;
// function increaseAndPrint() {
// 	console.log(`The counter is an ${counter}`)
// 	counter = counter + 1;
// }
// setInterval(increaseAndPrint, 1000);



// Without using setInterval

// function counter() {
//     const date = new Date()
//     console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
//     setTimeout(counter, 1000)
// }
// counter()

let counter = 0;
function increaseAndPrint() {
        console.log(counter)
        counter = counter + 1;
        setTimeout(increaseAndPrint, 1000);
}
setTimeout(increaseAndPrint, 1000);