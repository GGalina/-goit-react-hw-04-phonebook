import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Container, Title, SubTitle } from './Phonebook.styled';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleAddItem = (data) => {
    contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase())
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevState => [data, ...prevState]);
  };
  
  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const showFiltredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const handleDelete = key => {
    setContacts((prevContacts) =>
      prevContacts.filter(contact => contact.id !== key)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm handleAddItem={handleAddItem} />

      <SubTitle>Contacts</SubTitle>
      <Filter onFilter={handleFilter} filter={filter} />

      <ContactList
        contacts={showFiltredContacts()}
        onDelete={handleDelete}
      />
    </Container>
  );
};

App.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};