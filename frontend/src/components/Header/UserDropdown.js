import React from "react";
import { Dropdown } from "react-bootstrap";

const UserDropdown = ({ logoutHandler, userInfo }) => {
  const user = JSON.parse(userInfo);
  console.log(user);
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <img
          src={user.pic}
          alt="Piyush Agarwal"
          width="35"
          // height='35'
          style={{ borderRadius: 50 }}
        />
      </Dropdown.Toggle>
      <Dropdown.Menu title="Piyush Agarwal" alignRight>
        <Dropdown.Item href="#">My Profile</Dropdown.Item>
        <Dropdown.Item href="#">Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={logoutHandler}>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
