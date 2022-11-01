import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactsList/ContactsList";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
    };
  }

  hadleSubmit = (name, number) => {
    const contact = {
      id: nanoid(12),
      name,
      number,
    };

    this.setState(
      ({ contacts }) => {
        const findContact = contacts.find(oneContact => oneContact.name === contact.name);

        if(findContact) {
          alert(`${contact.name} is already in contacts`);
          return;
        };

        return {contacts: [contact, ...contacts]}}
      );
  }
  
  onInputFilterChange = (e) => {
    this.setState({filter: e.target.value});
  }

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  // deteteContact = (contact) => {
  //   console.log('Delete', contact);

  //   this.setState(({ contacts }) => {
  //     return {contacts: contacts.filter(contact => !contact.id)}
  //   })
  // }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const fieldFilter = this.getFilterContacts();

    return (
      <div
        style={{
          height: '100vh',
          padding: '40px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          hadleSubmit={this.hadleSubmit}
        />
        <h2>Contacts</h2>
        <Filter 
          onInputFilterChange={this.onInputFilterChange}
          filter={this.state.filter} 
          />
        <ContactsList 
          contactItems={fieldFilter}
          deleteContact={this.deleteContact}
          contacts={this.state.contacts} />
      </div>
    );
  }
};
