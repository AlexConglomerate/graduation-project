// const schedule = [{
//     name: 'Noah N.',
//     shift: 1,
//     day: [
//         {number: 1, text: "12", night: false, vacation: false,},
//         {number: 2, text: "12", night: false, vacation: false,},
//         {number: 3, text: "", night: false, vacation: false,},
//         {number: 4, text: "12", night: true, vacation: false,},
//         {number: 5, text: "12", night: true, vacation: false,},
//         {number: 6, text: "", night: false, vacation: false,},
//         {number: 7, text: "", night: false, vacation: false,},
//         {number: 8, text: "O", night: false, vacation: true,},
//     ],
// }]

// function scheduleFuntion(props) {
    // Узнать, сколько часов в смене, ночная ли
    const getDays = (shift, dayCount) => {
        /*
         Расшифровка значения массива arr
         0 - нет смены
         1 - дневная смена, 12 часов
         2 - ночная смена, 12 часов
         */
        const arr = [
            [0, 0, 1, 1, 0, 2, 2, 0,], // 1 вахта
            [2, 0, 0, 0, 1, 1, 0, 2,], // 2 вахта
            [0, 2, 2, 0, 0, 0, 1, 1,], // 3 вахта
            [1, 1, 0, 2, 2, 0, 0, 0,], // 4 вахта
        ]

        let a = arr[shift - 1][dayCount]
        return {
            text: a != 0 ? 12 : "",
            night: a === 2 ? true : "",
        }
    }

    const getDayWeek = (num) => {
        let obj = {
            1: "Mo",
            2: "Tu",
            3: "We",
            4: "Th",
            5: "Fr",
            6: "Sa",
            0: "Su",
        }
        return obj[num]
    }

    const GetAllMonth = (year, month) => {
        const lastDate = new Date(year, month, 0).getDate()
        // console.log('lastDate', lastDate)
        const firstDate = new Date(year, month, 1)
        // console.log(`firstDate`, firstDate)
        let numberDay = Math.ceil((firstDate.getTime() / 86400000 + 1))
        // console.log(111, numberDay)
        let cycleDay = numberDay % 8
        const arr = {day: [], 1: [], 2: [], 3: [], 4: [],}

        for (let i = 1; i <= lastDate; i++) {
            const rem = (numberDay += 1) % 7
            const dayWeek = getDayWeek(rem)
            arr.day.push({day: i, dayWeek: dayWeek, holiday: rem == 6 || rem == 0 ? true : false})

            arr[1].push(getDays(1, cycleDay))
            arr[2].push(getDays(2, cycleDay))
            arr[3].push(getDays(3, cycleDay))
            arr[4].push(getDays(4, cycleDay))
            cycleDay++
            if (cycleDay == 8) cycleDay = 0
        }
        return arr
    }


    export default GetAllMonth

