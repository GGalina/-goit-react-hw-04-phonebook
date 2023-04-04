import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormContainer, FormTitle, Input, Button } from './Phonebook.styled';

export const ContactForm = ({ handleAddItem }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    let formData = { name, number };

    const handleSubmit = event  => {
    event.preventDefault();
    const { name, number } = event.target.elements;

        handleAddItem({
            id: nanoid(),
            ...formData,
        });

        name.value = '';
        number.value = '';
    };

    const handleChange = event => {
    const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormTitle>Name</FormTitle>
                <Input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />

                <FormTitle>Number</FormTitle>
                <Input
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />

                <Button type="submit">Add contact</Button>
            </form>
        </FormContainer>
    );
};