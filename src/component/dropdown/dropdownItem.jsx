import React from "react";

const DropdownItem = ({name}) => {
    return (
        <>{name}</>
        // <Dropdown size="sm" className="m-1" as={ButtonGroup}>
        //     <Button variant="outline-secondary">{name}</Button>
        //     <Dropdown.Toggle split variant="outline-secondary" id="dropdown-split-basic"
        //     />
        //     <Dropdown.Menu>
        //         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        //     </Dropdown.Menu>
        // </Dropdown>
    )
}
export default DropdownItem;