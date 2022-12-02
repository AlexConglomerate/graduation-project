import React from 'react';
import DropdownItem from "./dropdown/dropdownItem";


function NavMonth(props) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (
        <div className="d-flex justify-content-center">
            {month.map(item => <DropdownItem name={item} className="m-1"/>)}
            {/*{month.map(item => <button className="m-1 btn btn-outline-secondary">{item}</button>)}*/}
        </div>
    );
}

export default NavMonth;