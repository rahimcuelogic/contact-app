import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = props => {
  const inputEl = useRef("");
  const deleteContactHandler = id => {
    props.removeContact(id);
  };
  const editContactHandler = id => {
    props.editContactId(id);
  };
  const renderContactList = props.contacts.map(contact => {
    return (
      <ContactCard
        contact={contact}
        deleteHandler={deleteContactHandler}
        editHandler={editContactHandler}
        key={contact.id}
      />
    );
  });
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search contact"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
            ref={inputEl}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts Available"}
      </div>
    </div>
  );
};

export default ContactList;
