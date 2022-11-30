import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SimpleDropdown({name, list}) {
    return (
        <DropdownButton variant="secondary" size="sm" id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>{name}</Dropdown.ItemText>
            {list.map(item => (<Dropdown.Item as="button">{item}</Dropdown.Item>))}
        </DropdownButton>
    );
}

export default SimpleDropdown;