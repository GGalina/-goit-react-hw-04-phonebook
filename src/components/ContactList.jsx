import { ListItem, DeleteBtn, List } from './Phonebook.styled';

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
                    {name}: {number}
                <DeleteBtn
                    type="button"
                    onClick={() => onDelete(id)}
                >
                    Delete
                </DeleteBtn>
            </ListItem>
            ))}
        </List>
    );
};