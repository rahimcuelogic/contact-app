import React from "react";
import { Link } from "react-router-dom";
import user from "../images/profile.jpeg";

const ContactDetails = props => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <img src={user} alt="user" />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{email}</div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">Back to List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
