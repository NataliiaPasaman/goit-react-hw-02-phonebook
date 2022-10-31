import React from "react";
import PropTypes from 'prop-types';
import css from "components/ContactsList/ContactsList.module.css";
import { ItemContactList } from "components/ItemContactList/ItemContactList";

export const ContactsList = ({ contacts, contactItems }) => {
  return (
    <ul className={css.contacts__list}>
      <ItemContactList contacts={contactItems} />
    </ul>
  );
};

ContactsList.propTypes = {
    contactItems:  PropTypes.array,
}