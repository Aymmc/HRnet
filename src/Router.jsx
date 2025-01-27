import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import EmployeeList from "./pages/employeeList/employeeList";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee-list" element={<EmployeeList />} />
    </Routes>
  );
}

export default Router;
