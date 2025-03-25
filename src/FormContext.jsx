import React, { createContext, useState } from "react";

// Créer le contexte
export const FormContext = createContext();

// Créer le Provider
const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const [employees, setEmployees] = useState([]); // Tableau pour stocker les employés

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const saveEmployee = () => {
    setEmployees((prev) => {
      const updatedEmployees = [...prev, formData];
      return updatedEmployees;
    });
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    }); // Réinitialiser le formulaire
  };

  return (
    <FormContext.Provider value={{ formData, handleChange, saveEmployee, employees }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
