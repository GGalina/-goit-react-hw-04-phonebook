import { FilterArea, FilterDesc, Input } from './Phonebook.styled';

export const Filter = ({ onFilter, filter }) => {
    return (
        <FilterArea>
            <FilterDesc>Find contacts by name</FilterDesc>
            <Input
                onChange={onFilter}
                type="text"
                value={filter}
            />
        </FilterArea>
    );
};