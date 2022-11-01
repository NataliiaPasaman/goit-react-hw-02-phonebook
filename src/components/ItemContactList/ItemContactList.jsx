import React from "react";
import PropTypes from 'prop-types';
import css from "components/ItemContactList/ItemContactList.module.css";

export const ItemContactList = ({ contacts, deleteContact }) => {
  
  const addContactItem = contacts => {

    return contacts.map(contact => {
      // console.log('contact', contact)
      return (
        <li className={css.contacts__item} key={contact.id}>
          {contact.name}:
          <span className={css.contacts__number}> {contact.number}</span>
          <button
            type="button"
            className={css.btnDelete}
            onClick={() => deleteContact(contact.id)}

            // onClick={
            //   () => {
            //   console.log('Delete', contact);
            //   const position = contacts.indexOf(contact);
            //   contacts.splice(position, 1);
            //   console.log('contacts onClick', contacts);
            // }}
            >
            Delete
          </button>
        </li>
      );
    });
  };

  return <>{contacts.length > 0 && addContactItem(contacts)}</>;
};

ItemContactList.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,
}

