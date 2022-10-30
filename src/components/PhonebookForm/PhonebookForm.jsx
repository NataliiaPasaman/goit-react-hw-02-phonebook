import React from "react";
import PropTypes from 'prop-types';
import css from "components/PhonebookForm/PhonebookForm.module.css";

export const PhonebookForm = ({ onInputChange, onSubmitForm }) => {
  return (
<>
<h2 className={css.formTitle}>Phonebook</h2>
    <form className={css.formPhone} onSubmit={onSubmitForm}>
      <label className={css.labelPhone}>
        Name
        <input
          className={css.inputPhone}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onInputChange}
        />
      </label>
      <button className={css.btnPhone} type="submit">Add contact</button>
    </form>
</>
  );
};

PhonebookForm.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
}