import React from "react";
import PropTypes from 'prop-types';
import css from "components/ContactsList/ContactsList.module.css";

export const ContactsList = ({ contacts }) => {

  const addContactItem = contacts => {
    return contacts.map(contact => {
      return (
        <li className={css.contacts__item} key={contact.id}>
          {contact.name}: 
          <span className={css.contacts__number}> {contact.number}</span>
        </li>
      );
    });
  };

  return (
    <>
      <h2 className={css.contacts__title}>Contacts</h2>
      <ul className={css.contacts__list}>
        {contacts.length > 0 && addContactItem(contacts)}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
    contacts: PropTypes.array,
}