import React from "react";
import styles from "./Contacts.module.scss";

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      {contact.name}: {contact.number}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
