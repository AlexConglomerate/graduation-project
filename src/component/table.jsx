import React from "react";
import workers from "../api/workers";
import './table.css'
import GetAllMonth from "./scheduleFuntion";
import vacations from "../api/vacations";
import TableTest123 from "./tableTest123";


const Table = () => {
    const scheldule = GetAllMonth(2022, 12)
    const work = workers
    const cls = "border border-slate-600 px-3"

    return (
        <>
            <TableTest123/>
            {/*<table className="border-collapse border border-slate-500 m-5 mt-2">*/}
            {/*    {vacations.map(item => (*/}
            {/*        <tr>*/}
            {/*            <td className={cls}>{item.family}</td>*/}
            {/*            <td className={cls}>{item.start}</td>*/}
            {/*            <td className={cls}>{item.end}</td>*/}
            {/*            <td className={cls}>{item.type}</td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*</table>*/}


            return
            <table className="table table-hover m-3 d-flex flex-column justify-content-center align-items-center"
                   style={{padding: "1px"}}>
                <tbody>
                <thead>
                <tr>
                    <td>
                        Last Name
                    </td>
                    <td>
                        Job Title
                    </td>

                    {scheldule.day.map(i => <td>{i.day}</td>)}
                </tr>
                </thead>

                <tr>
                    <td></td>
                    <td></td>
                    {scheldule.day.map(i => (
                        <td style={{padding: "1px"}}>{i.dayWeek}</td>
                    ))}
                </tr>

                {work.map(a => (
                    <tr>{a.lastName}
                        <td style={{padding: "1px"}}>{a.jobTitle}</td>
                        {scheldule[a.shift].map(i => (
                            <td style={{padding: "1px"}}
                                className={i.night == true ? "table-secondary" : ""}>{i.text}</td>
                        ))}
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )
}

export default Table