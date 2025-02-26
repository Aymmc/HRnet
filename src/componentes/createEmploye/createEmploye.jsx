import React, { useContext, useState } from "react";
import { FormContext } from "../../FormContext";
import states from "../../states";
import "./style.css";
import { NavLink } from "react-router-dom";
import Modal from "@aymmc/react-modal-library"; // Assurez-vous que l'import est correct

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

        <div className="input">
          <i class="fa fa-user"></i>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <i class="fa fa-user"> </i>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <i class="fa-solid fa-cake-candles"></i>
          <input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <i class="fa-solid fa-play"></i>
          <input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>

        <fieldset className="address">
          <legend>Address</legend>
          <div className="input">
            <i class="fa-solid fa-road"></i>
            <input
              id="street"
              placeholder="Street"
              type="text"
              value={formData.street}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <i class="fa-solid fa-city"></i>
            <input
              id="city"
              placeholder="City"
              type="text"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="state">State</label>
          <select id="state" value={formData.state} onChange={handleChange}>
            <option value="">Select a state</option>
            {states.map((states) => (
              <option key={states.abbreviation} value={states.abbreviation}>
                {states.name}
              </option>
            ))}
          </select>
          <div className="input"> 
          <i class="fa-solid fa-inbox"></i>
          <input
            id="zipCode"
            placeholder="Zip Code"
            type="number"
            value={formData.zipCode}
            onChange={handleChange}
          />
          </div>  
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
            <div className="divbutton">
        <button type="button" onClick={handleSaveEmployee}>
          Save
        </button>
        </div>
      </form>

      {/* Modal affichée uniquement si isModalOpen est vrai */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        contentLabel="Employée Créée"
      >
        <h2>Employée créée</h2>
      </Modal>
    </section>
  );
};

export default CreateEmploye;
