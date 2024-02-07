// PatientList.js
import React, { useEffect, useState } from 'react';
import PatientService from './PatientService';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [editingPatientId, setEditingPatientId] = useState(null);
  const [editedPatient, setEditedPatient] = useState({});

  useEffect(() => {
    const fetchPatients = async () => {
      const data = await PatientService.getAllPatients();
      setPatients(data);
    };

    fetchPatients();
  }, []);

  const handleEditClick = (id) => {
    setEditingPatientId(id);
    const patientToEdit = patients.find((patient) => patient.id === id);
    setEditedPatient({ ...patientToEdit });
  };

  const handleSaveClick = async () => {
    await PatientService.updatePatient(editedPatient.id, editedPatient);
    setEditingPatientId(null);
    setEditedPatient({});
    const updatedPatients = await PatientService.getAllPatients();
    setPatients(updatedPatients);
  };

  const handleDeleteClick = async (id) => {
    await PatientService.deletePatient(id);
    const updatedPatients = await PatientService.getAllPatients();
    setPatients(updatedPatients);
  };

  const handleChange = (e, field) => {
    setEditedPatient({ ...editedPatient, [field]: e.target.value });
  };

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {editingPatientId === patient.id ? (
              <>
                <input
                  type="text"
                  value={editedPatient.name}
                  onChange={(e) => handleChange(e, 'name')}
                />
                <input
                  type="text"
                  value={editedPatient.phone}
                  onChange={(e) => handleChange(e, 'phone')}
                />
                <input
                  type="email"
                  value={editedPatient.email}
                  onChange={(e) => handleChange(e, 'email')}
                />
                <input
                  type="text"
                  value={editedPatient.age}
                  onChange={(e) => handleChange(e, 'age')}
                />
                <button onClick={handleSaveClick}>Save</button>
              </>
            ) : (
              <>
                {patient.name} - {patient.phone} - {patient.email} - {patient.age}{' '}
                <button onClick={() => handleEditClick(patient.id)}>Edit</button>
                <button onClick={() => handleDeleteClick(patient.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
