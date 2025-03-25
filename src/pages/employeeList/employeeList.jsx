import React, { useContext, useState } from "react";
import { FormContext } from "../../FormContext";
import DataTable from "react-data-table-component";
import "./employeeList.css";
import { NavLink } from "react-router-dom";

const EmployeeList = () => {
  const { employees } = useContext(FormContext); // Accéder à la liste des employés
  const [searchTerm, setSearchTerm] = useState(""); // État pour stocker la recherche
  const customStyles = {
    table: {
      style: {
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Ombre autour du tableau
        borderRadius: "10px", // Coins arrondis pour un effet plus propre
        overflow: "hidden", // Évite les débordements des bordures arrondies
      },
    },
    rows: {
      style: {
        backgroundColor: "#f9f9f9",
        color: "#808080",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#f9f9f9",
        color: "#808080",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        borderBottom: "1px solid #ddd",
      },
    },
  };
  
  // Filtrage des employés en fonction du terme de recherche
  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.zipCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.street.toLowerCase().includes(searchTerm.toLowerCase())

    );
  });

  // Colonnes pour la DataTable
  const columns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    { name: "Start Date", selector: (row) => row.startDate, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
    { name: "Date of Birth", selector: (row) => row.dateOfBirth, sortable: true },
    { name: "Street", selector: (row) => row.street, sortable: true },
    { name: "City", selector: (row) => row.city, sortable: true },
    { name: "State", selector: (row) => row.state, sortable: true },
    { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
  ];

  return (
    <section className="employeeList">
      <div className="headerlist">
      <h2>Current Employees</h2>
      {/* Champ de recherche */}
      <div>
      <input
        type="text"
        placeholder="Search employees..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /></div>
      </div>
      {/* Tableau des employés */}
      <DataTable
        title=""
        customStyles={customStyles}
        columns={columns}
        data={filteredEmployees} // Passe les employés filtrés ici
        pagination
        paginationPerPage={10} // Nombre de lignes par page par défaut
        paginationRowsPerPageOptions={[10, 20, 50, 100]} // Options pour le nombre de lignes
        defaultSortFieldId={1} // Tri par défaut sur la première colonne (First Name)
        sortServer={false} // Active le tri côté client
      />
      <NavLink to="/">Home</NavLink>
    </section>
  );
};

export default EmployeeList;
