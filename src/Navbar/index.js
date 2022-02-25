import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../reduxUtils/action";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Body = styled("div")`
  position: absolute;
  top: 56px;
  width: 100%;
`;
const RightAlign = styled("div")`
  text-align: end;
`;
const NavBarMenu = ({ name, email, children }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return name ? (
    <Fragment>
      <div className="navbar navbar-expand-lg navbar-light bg-light px-sm-5 fixed-top">
        <div className="container">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <StyledLink
                className={`nav-link ${pathname.includes("table") && "active"}`}
                to="/table"
              >
                Table
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink
                className={`nav-link ${pathname.includes("json") && "active"}`}
                to="/json"
              >
                Json
              </StyledLink>
            </li>
          </ul>
          <div className="navbar-nav ms-auto">
            <StyledLink
              to="/"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="link"
            >
              <div
                className="cart-icon nav-link"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <span>{name}</span>
              </div>
            </StyledLink>
          </div>
        </div>
      </div>
      <Body>
        <RightAlign className="container">
          <div>Your Email -{email}</div>
        </RightAlign>
        <div>{children}</div>
      </Body>
      <div className="position-fixed bottom-0 end-0 p-3">
        <div className="toast show">
          <div className="toast-header">You are Logged In!!!</div>
          <div className="toast-body">Click your name in header to logout</div>
        </div>
      </div>
    </Fragment>
  ) : (
    <Navigate to="/logout" />
  );
};

export default NavBarMenu;
