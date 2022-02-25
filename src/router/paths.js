import Login from "../Pages/Login";
import Table from "../Pages/Table";
import JsonData from "../Pages/JsonData";

export const routes = [
  { path: "/login", component: <Login /> },
  { path: "/table", component: <Table /> },
  { path: "/json", component: <JsonData /> },
];
