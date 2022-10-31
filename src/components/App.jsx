import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactsList/ContactsList";

/** Додай поле пошуку, яке можна використовувати для фільтрації списку 
 * контактів за ім'ям.

Поле пошуку – це інпут без форми, значення якого записується у 
стан (контрольований елемент).
Логіка фільтрації повинна бути нечутливою до регістру. 



Достатньо виділити чотири компоненти: 
форма додавання контактів - ContactForm,
список контактів - ContactList, 
елемент списку контактів - ItemContactList
 та фільтр пошуку Filter.
*/

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(12),
      name: name,
      number: number,
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
  };

  render() {
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
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
};