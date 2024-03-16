// FormContext.js
import React, { createContext, useContext, useState } from 'react';
import { handleSignUp } from './HandleFormSubmit'; // Adjust the import path as needed

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  
  const handleFormSubmit = async () => {
    console.log('Submitting form with data:', formData);
    try {
      await handleSignUp(formData);
      // Handle success, e.g., navigate or show a success message
    } catch (error) {
      console.error("Error during form submission:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, handleFormSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
