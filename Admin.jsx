import React, { useState } from 'react';

const Admin = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [communicationMethods, setCommunicationMethods] = useState([
    { name: 'LinkedIn Post', sequence: 1 },
    { name: 'LinkedIn Message', sequence: 2 },
    { name: 'Email', sequence: 3 },
    { name: 'Phone Call', sequence: 4 },
    { name: 'Other', sequence: 5 },
  ]);

  const addCompany = () => {
    // Logic to add company
    console.log({ companyName, companyLocation });
  };

  const handleCommunicationMethodChange = (e, index) => {
    const updatedMethods = [...communicationMethods];
    updatedMethods[index].name = e.target.value;
    setCommunicationMethods(updatedMethods);
  };

  return (
    <div>
      <h1>Admin Module</h1>
      <div>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={companyLocation}
          onChange={(e) => setCompanyLocation(e.target.value)}
        />
        <button onClick={addCompany}>Add Company</button>
      </div>

      <h2>Communication Methods</h2>
      {communicationMethods.map((method, index) => (
        <div key={index}>
          <input
            type="text"
            value={method.name}
            onChange={(e) => handleCommunicationMethodChange(e, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Admin;