import React from "react";
import GetAllMonth from "./schedule";
import workers from "../api/vacations";
import Dropdown from "./dropDown";
import './table.css'


const Table = () => {
    const scheldule = GetAllMonth(2022, 12)
    const work = workers
    return (
        <>
            <table className="table table-hover m-3">
                <thead>
                <tr>
                    <td>
                        Last Name
                    </td>
                    <td>
                        Job Title
                    </td>

                    {scheldule.day.map(i => (
                        <td>{i.day}</td>
                    ))}
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    {scheldule.day.map(i => (
                        <td>{i.dayWeek}</td>
                    ))}
                </tr>

                {work.map(a => (
                    <tr>{a.lastName}
                        <td>{a.jobTitle}</td>
                        {scheldule[a.shift].map(i => (
                            <td className={i.night == true ? "table-secondary" : ""}>{i.text}</td>
                        ))}
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )
}

export default Table