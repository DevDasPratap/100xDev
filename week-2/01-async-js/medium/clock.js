const displayTime = () => {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    const seconds = date.getSeconds()
    // console.log(hours + ':' + minutes + ':' + seconds)

    let period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;

    hours = hours ? hours : 12;

    console.log(`${hours}:${minutes}:${seconds} ${period}`);


    setTimeout(displayTime, 1000)
}

const res = displayTime()