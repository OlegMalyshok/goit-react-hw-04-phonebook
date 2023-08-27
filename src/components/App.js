import { useEffect, useState } from 'react';
import { PhoneForm } from './Phonebook/PhonebookForm';
import { ListItem } from './Phonebook/PhonebookFormList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

const getContactsSaved = () => {
  const SavedContacts = localStorage.getItem('saved-conctacts');
  if (SavedContacts !== null) {
    return JSON.parse(SavedContacts);
  }
  return [
    { id: '1', name: 'Eden Clements', number: '645-17-79' },
    { id: '2', name: 'Hermione Kline', number: '443-89-12' },
    { id: '3', name: 'Rosie Simpson', number: '459-12-56' },
    { id: '4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export const App = () => {
  const [contacts, conctactsSetState] = useState(getContactsSaved);
  const [name, nameSetState] = useState('');
  const [number, numberSetState] = useState('');
  const [contactFilter, contactFilterSetState] = useState('');

  // Запис в localstorage
  useEffect(() => {
    localStorage.setItem('saved-conctacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContactItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  const addContact = newContactItem => {
    const currentContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContactItem.name.toLowerCase()
    );
    if (currentContact) {
      alert(`${newContactItem.name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: newContactItem.name,
      number: newContactItem.number,
    };

    conctactsSetState(prevState => [...prevState, newContact]);
  };

  const changeContactFilter = newFilter => {
    contactFilterSetState(newFilter);
  };

  const deleteContact = contactId => {
    conctactsSetState(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <h2>PHONEBOOK</h2>
      <PhoneForm onAdd={addContact} />
      <ListItem
        contacts={visibleContactItems}
        name={name}
        number={number}
        contactFilter={contactFilter}
        onChangeContact={changeContactFilter}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};
