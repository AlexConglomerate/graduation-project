import React from 'react';
import vacations from "../api/vacations";

function Vacation(props) {
    const cls = "border border-slate-600 px-3"
    return (
        <div>
            <input type="date" name="calendar"/>
            <table className="border-collapse border border-slate-500 m-5 mt-2">
                <tr>
                    <th className={cls}>Фамилия</th>
                    <th className={cls}>Начало</th>
                    <th className={cls}>Конец</th>
                    <th className={cls}>Тип</th>
                </tr>

                {vacations.map(item => (
                    <tr>
                        <td className={cls}>{item.family}</td>
                        <td className={cls}>{item.start}</td>
                        <td className={cls}>{item.end}</td>
                        <td className={cls}>{item.type}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Vacation;