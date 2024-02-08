"use client";

// components/StepTwoForm.js
import { useState } from 'react';
import jsPDF from 'jspdf';


const Kooperationen = ({ formData, onGeneratePDF }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    // Toggle option selection
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };


const handleGeneratePDF = () => {
  // Create a new jsPDF instance
  const pdf = new jsPDF();

  // Set initial y-position for rendering text
  let yPosition = 10;

  // Add title to the PDF
  pdf.text("Selected Options and Form Data", 10, yPosition);
  yPosition += 10; // Increase y-position for next element

  // Iterate over selectedOptions and add them to PDF
  selectedOptions.forEach(option => {
    pdf.text(`Selected Option: ${option}`, 10, yPosition);
    yPosition += 10;
  });

  // Add a separator between selectedOptions and formData
  pdf.text("-----------------------------", 10, yPosition);
  yPosition += 10;

  // Iterate over formData and add them to PDF
  formData.forEach(data => {
    pdf.text(`Form Data: ${data}`, 10, yPosition);
    yPosition += 10;
  });

  // Save or download the PDF
  pdf.save("selected_options_and_form_data.pdf");
};

  return (
    <div>
      <h2>Step One Form</h2>
      {/* Render checkboxes for options */}
      <div>
        <input
          type="checkbox"
          id="Kooperationen"
          checked={selectedOptions.includes('Kooperationen')}
          onChange={() => handleOptionClick('Kooperationen')}
        />
        <label htmlFor="useClient">Kooperationen</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="Kooperationen2"
          checked={selectedOptions.includes('Kooperationen2')}
          onChange={() => handleOptionClick('Kooperationen2')}
        />
        <label htmlFor="useClient">Kooperationen2</label>
      </div>
      {/* Add more checkboxes as needed */}
      
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
};


export default Kooperationen;