import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function Dropdown1({list, listName}) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {listName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {list.map(i => <Dropdown.Item>{i}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Dropdown1;