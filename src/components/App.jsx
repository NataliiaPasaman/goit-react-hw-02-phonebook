import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid';
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import { ContactsList } from "./ContactsList/ContactsList";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: '',
      number: ''
    }
  }


  onInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  }


  onSubmitForm = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;
    const contactId = nanoid();

    const contact = {
      id: contactId,
      name,
      number,
    };
    console.log('contact', contact);
    this.setState(
      ({ contacts }) => ({contacts: [contact, ...contacts]})
    );
  }


  render() {
    return (
      <div
        style={{
          height: '100vh',
          padding: '40px',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <PhonebookForm 
        onInputChange={this.onInputChange}
        onSubmitForm={this.onSubmitForm}
        />
        <ContactsList contacts={this.state.contacts}/>
      </div>
    );
  }
};