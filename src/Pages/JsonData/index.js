import React from "react";
import { useSelector } from "react-redux";
import NavBarMenu from "../../Navbar";

const JsonData = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const users = useSelector((state) => state.users);
  return (
    <React.Fragment>
      <NavBarMenu name={name} email={email}>
        <div>{JSON.stringify(users)}</div>
      </NavBarMenu>
    </React.Fragment>
  );
};

export default JsonData;
