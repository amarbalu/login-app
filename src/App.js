import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { routes } from "./router/paths";

import PrivateRoute from "./router/PrivateRoute";

/**
 * App form base of this application loads Navbar and its content routes
 * @returns Component
 */

const App = () => {
  const email = useSelector((state) => state.email);
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            {routes.map((props) =>
              ["/table", "/json"].includes(props.path) ? (
                <Route
                  key={props.path}
                  path={props.path}
                  element={
                    <PrivateRoute email={email}>{props.component}</PrivateRoute>
                  }
                />
              ) : (
                <Route
                  key={props.path}
                  path={props.path}
                  element={props.component}
                />
              )
            )}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
};

export default App;
