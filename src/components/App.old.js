// import { Component } from 'react';
// import { PhoneForm } from './Phonebook/PhonebookForm';
// import { ListItem } from './Phonebook/PhonebookFormList';
// import { nanoid } from 'nanoid';
// import { Container } from './App.styled';

// export class App extends Component {
// state = {
//   contacts: [
//     { id: '1', name: 'Eden Clements', number: '645-17-79' },
//     { id: '2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: '3', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: '4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   name: '',
//   number: '',
//   contactFilter: '',
// };

// componentDidMount() {
//   const SavedContacts = localStorage.getItem('saved-conctacts');
//   if (SavedContacts !== null) {
//     this.setState({
//       contacts: JSON.parse(SavedContacts),
//     });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem(
//       'saved-conctacts',
//       JSON.stringify(this.state.contacts)
//     );
//   }
// }

// addContact = newContactItem => {
//   const currentContact = this.state.contacts.find(
//     contact =>
//       contact.name.toLowerCase() === newContactItem.name.toLowerCase()
//   );

//   if (currentContact) {
//     alert(`${newContactItem.name} is already in contacts.`);
//     return;
//   }
//   const newContact = {
//     id: nanoid(),
//     name: newContactItem.name,
//     number: newContactItem.number,
//   };

//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, newContact],
//   }));
// };

// changeContactFilter = newFilter => {
//   this.setState({
//     contactFilter: newFilter,
//   });
// };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// render() {
//   const { contacts, name, number, contactFilter } = this.state;
//   const visibleContactItems = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(contactFilter.toLowerCase())
//   );
//   // return (
//   <Container>
//     <h2>PHONEBOOK</h2>
//     <PhoneForm onAdd={this.addContact} />
//     <ListItem
//       contacts={visibleContactItems}
//       name={name}
//       number={number}
//       contactFilter={contactFilter}
//       onChangeContact={this.changeContactFilter}
//       onDeleteContact={this.deleteContact}
//     />
//   </Container>
// );
//   }
// }
