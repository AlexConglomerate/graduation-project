import React from 'react';

const TableTest123 = (props) => {
    const header = {
        header1: "Last Name",
        header2: "Job Title",
        day: [
            {
                number: 1,
                dayOfTheWeek: 'Th1',
                dayOff: false,
            },
            {
                number: 2,
                dayOfTheWeek: 'Th2',
                dayOff: true,
            },
            {
                number: 3,
                dayOfTheWeek: 'Th3',
                dayOff: true,
            },
            {
                number: 4,
                dayOfTheWeek: 'Th4',
                dayOff: false,
            },
            {
                number: 5,
                dayOfTheWeek: 'Th5',
                dayOff: false,
            },
        ]
    }
    const cls = "border border-slate-600 px-3"

    const body = {
        "cn8c3d03h4f-34h": {
            lastName: '',
            jobTitle: '',
            day: [
                {
                    number: 12,
                    night: false,
                },
                {
                    number: 12,
                    night: false,
                },
                {
                    number: 0,
                    night: false,
                },
                {
                    number: 0,
                    night: false,
                },
                {
                    number: 12,
                    night: true,
                },
            ]
        },

        "by3h3gdsw5y": {
            lastName: '',
            jobTitle: '',
            day: [
                {
                    number: 0,
                    night: false,
                },
                {
                    number: 0,
                    night: false,
                },
                {
                    number: 12,
                    night: false,
                },
                {
                    number: 12,
                    night: false,
                },
                {
                    number: 12,
                    night: true,
                },
            ]
        },

        "jo4308sdah4": {
            lastName: '',
            jobTitle: '',
            day: [
                {
                    number: 0,
                    night: false,
                },
                {
                    number: 12,
                    night: true,
                },
                {
                    number: 0,
                    night: false,
                },
                {
                    number: 12,
                    night: false,
                },
                {
                    number: 12,
                    night: false,
                },
            ]
        }
    }
    return (
        <>

            <table className="border-collapse border border-slate-500 m-5 mt-2 bg-">
                <tr>
                    {header.day.map(item => {
                        const colorCell = item.dayOff == true ? "darkgray" : ""
                        return (
                            <td
                                className={cls}
                                style={{background: colorCell}}
                            >
                                {item.number}</td>
                        )
                    })}
                </tr>
            </table>


        </>
    );
}

export default TableTest123;


// const arrHeader = header.day.map(item => [item.number, item.dayOfTheWeek])
// const arrBody = body["cn8c3d03h4f-34h"].day.map(item => {
//         return {number: item.number, night: item.night}
//     }
// )
// const q = 2
// console.log('arrHeader', arrHeader)
// console.log('arrBody', arrBody)
// console.table(arrHeader)
// console.table(arrBody)
// console.table([[213, 3, 43, 2, 445, 4], [213, 3, 43, 2, 445, 4],])