import React, { useContext, useState } from "react";
import { FormContext } from "../../FormContext";
import states from "../../states";
import "./style.css";
import { NavLink } from "react-router-dom";
import Modal from '@aymmc/react-modal-library';  // Assurez-vous que l'import est correct


const CreateEmploye = () => {
  const { formData, handleChange, saveEmployee } = useContext(FormContext);

  // État pour gérer l'affichage de la modal
  const [isOpen, setIsOpen] = useState(false);
  // Fonction pour enregistrer l'employé et afficher la modal
  const handleSaveEmployee = () => {
    // Appeler la fonction saveEmployee pour enregistrer l'employé
    saveEmployee();

    // Ouvrir la modal après l'enregistrement
    setIsOpen(true);
  };

  return (
    <section className="Create_Employe">
      <h1>HRnet</h1>
      <NavLink to="/employee-list">View Current Employee</NavLink>
      <h2>Create Employee</h2>
      <form id="create-employee" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          id="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            value={formData.street}
            onChange={handleChange}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
          />

          <label htmlFor="state">State</label>
          <select id="state" value={formData.state} onChange={handleChange}>
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select a department</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>

        <button type="button" onClick={handleSaveEmployee}>
          Save
        </button>
      </form>

      {/* Modal affichée uniquement si isModalOpen est vrai */}
      <Modal 
        isOpen={isOpen} onClose={() => setIsOpen(false)}
        contentLabel="Employée Créée"
      >
        <h2>Employée créée</h2>
      </Modal>
    </section>
  );
};

export default CreateEmploye;
