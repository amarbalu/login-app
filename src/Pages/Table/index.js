import React from "react";
import { useSelector } from "react-redux";
import NavBarMenu from "../../Navbar";

const Table = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const users = useSelector((state) => state.users);
  return (
    <React.Fragment>
      <NavBarMenu name={name} email={email}>
        {users.length ? (
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ name, id, email }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <span>Loading...</span>
        )}
      </NavBarMenu>
    </React.Fragment>
  );
};

export default Table;
