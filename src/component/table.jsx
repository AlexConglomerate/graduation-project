import React from "react";
import workers from "../api/vacations";
import './table.css'
import GetAllMonth from "./scheduleFuntion";


const Table = () => {
    const scheldule = GetAllMonth(2022, 12)
    const work = workers
    return (
        <>
            <table className="table table-hover m-3 d-flex flex-column justify-content-center align-items-center"
                   style={{padding: "1px"}}>
                <tbody style={{}}>
                <thead style={{}}>
                <tr>
                    <td>
                        Last Name
                    </td>
                    <td>
                        Job Title
                    </td>

                    {scheldule.day.map(i => (
                        <td style={{}}>{i.day}</td>
                    ))}
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