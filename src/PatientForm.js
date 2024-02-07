// PatientForm.js
import React, { useState } from 'react';
import PatientService from './PatientService';

const PatientForm = ({ onSubmit }) => {
  const [patient, setPatient] = useState({ name: '', phone: '', email: '', age: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPatient = await PatientService.addPatient(patient);
    onSubmit(newPatient);
    setPatient({ name: '', phone: '', email: '', age: '' });
  };

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={patient.name} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" value={patient.phone} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={patient.email} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={patient.age} onChange={handleChange} />
      </label>
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
