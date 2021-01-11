import React from "react";
import { Dropdown } from "react-bootstrap";

const UserDropdown = ({ logoutHandler }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          alt="Piyush Agarwal"
          width="35"
          // height='35'
        />
      </Dropdown.Toggle>
      <Dropdown.Menu title="Piyush Agarwal" alignRight>
        <Dropdown.Item href="#action/3.1">My Profile</Dropdown.Item>
        <Dropdown.Item href="#action/3.2">Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#action/3.4" onClick={logoutHandler}>
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
