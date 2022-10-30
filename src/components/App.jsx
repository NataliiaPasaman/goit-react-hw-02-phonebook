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
      name: ''
    }
  }


  onInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  }


  onSubmitForm = (evt) => {
    evt.preventDefault();
    const { name } = this.state;
    const contactId = nanoid();
    const contact = {
      name,
      id: contactId,
    };
    this.setState((prevState) => {
       this.state = {
        ...this.state,
        contacts: prevState.contacts.push(contact),
      }
      console.log('prevState', prevState.contacts);
    });

    // console.log(`Name ${this.state.name}`);
    console.log('contact', contact);
  }


  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <PhonebookForm 
        onInputChange={this.onInputChange}
        onSubmitForm={this.onSubmitForm}
        />
        <ContactsList />
      </div>
    );
  }
};