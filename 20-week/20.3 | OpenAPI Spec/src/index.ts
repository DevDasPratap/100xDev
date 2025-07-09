import { once } from "helpful-decorators";

class DateClass {
    private timeZone: string
    constructor(timeZone: string) {
        this.timeZone = timeZone
    }

    @once
    getTime() {
        let d = new Date()
        console.log('Time in getTime ')
        return d.getTime()
    }
    getMonth() {
        let d = new Date()
        return d.getMonth()
    }
    getTimeZoneOffset() {
        return this.timeZone
    }
    expensiveDecorator(){
        const startTime = new Date().getTime()
        let ctr = 0
        for(let i=0; i<100000000; i++){
            ctr++
        }
        console.log('ctr', ctr)
        const endTime = new Date().getTime()
        console.log('Total Execution Time:', endTime - startTime,'ms')
    }

}

const dateObj = new DateClass('IND')
// // const response = dateObj.getTime()
// const response = dateObj.expensiveDecorator()
// console.log(response);


// i used @onec decorator from helpful-decorators to make sure that the getTime function is only called once
dateObj.getTime()
dateObj.getTime()
dateObj.getTime()
dateObj.getTime()


// build for experimanet tsc --experimentalDecorators
// More learn about decorators: https://github.com/NetanelBasal/helpful-decorators