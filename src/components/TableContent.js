import React from 'react';
import './TableContent.css'; 
import InsertRowForm from './InsertRowForm';

const TableContent = ({ data, formData, handleInputChange, handleSubmit }) => {

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>position</th>
            <th>department</th>
            <th>age</th>
            <th>salary</th>
            <th>experience</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
              <td>{employee.experience}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="7">
              <InsertRowForm
                formData={formData}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
