import React from 'react';
import Dropdown from "./dropDown";

function Control() {
    return (
        <div className="d-flex flex-row justify-content-center">
            <Dropdown
                const listName="Choice year"
                const list={[2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,]}
            />

            <Dropdown
                const listName="Choice month"
                const list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            />
        </div>
    );
}

export default Control;