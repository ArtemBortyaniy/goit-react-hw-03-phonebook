import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';

class App extends Component {
  static CONTACTS_STORAGE = 'contacts';

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const data = localStorage.getItem(App.CONTACTS_STORAGE);
    let parsetData = JSON.parse(data);

    if (parsetData) {
      this.setState({ contacts: parsetData });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevProps.contacts;
    const nextContacts = this.state.contacts;
    if (prevContacts !== nextContacts) {
      localStorage.setItem(App.CONTACTS_STORAGE, JSON.stringify(nextContacts));
    }
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  addContact = ({ name, number }) => {
    const id = nanoid();
    const { contacts } = this.state;

    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id }],
    }));
  };

  handleFilter = () => {
    const { contacts } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <Title title={'Phonebook'} type={'h1'}></Title>
        <ContactForm onSabmit={this.addContact}></ContactForm>
        <Title title={'Contacts'} type={'h2'}></Title>
        <Filter value={this.state.filter} onChange={this.changeFilter}></Filter>
        <ContactList
          contacts={this.handleFilter()}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}

export { App };
