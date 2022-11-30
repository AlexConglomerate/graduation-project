import React from 'react';
import Control from "./control";
import Table from "./table";

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


        return (
        <div className="d-flex flex-column m-5 fs-10">
            <Control/>
            <Table/>
        </div>
    );
}

export default Schedule;