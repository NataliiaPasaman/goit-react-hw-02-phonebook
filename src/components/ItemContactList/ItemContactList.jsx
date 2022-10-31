import React from "react";
import PropTypes from 'prop-types';
import css from "components/ItemContactList/ItemContactList.module.css";

export const ItemContactList = ({ contacts }) => {
  
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
      {contacts.length > 0 && addContactItem(contacts)}
    </>
  );
};

ItemContactList.propTypes = {
    contacts: PropTypes.array,
}

