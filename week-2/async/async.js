const datas = [
    {name: 'Ajay', Profression: 'Software engineer'},
    {name: 'PD', Profression: 'Software developement engineer'},
    {name: 'Das', Profression: 'Software developer'},
    {name: 'test', Profression: 'Tester'}
]

// 1st 
// function getData(params) {
//     setTimeout(()=>{
//         datas.forEach((data, index) => {
//             let res = data.name
//             console.log(res)
//         })
//     }, 1000)
// }

// function createData(newData) {
//     datas.push(newData)
//     setTimeout(()=>{}, 2000)
// }
// createData({name: 'Dipu', Profression: 'Call center'})
// getData()


// callback
function getData(params) {
    setTimeout(()=>{
        datas.forEach((data, index) => {
            let res = data.name
            console.log(res)
        })
    }, 1000)
}

function createData(newData, callback) {
    datas.push(newData)
    callback()
    setTimeout(()=>{}, 2000)
}
createData({name: 'Dipu', Profression: 'Call center'}, getData)