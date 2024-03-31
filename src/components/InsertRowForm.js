import React from 'react';
import './InsertRowForm.css'


const InsertRowForm = ({ formData, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="insert-row-form">
      <div className="form-container">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={onInputChange} required />
        </div>
        <div className="form-group">
          <label>Position:</label>
          <input type="text" name="position" value={formData.position} onChange={onInputChange} required />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input type="text" name="department" value={formData.department} onChange={onInputChange} required />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={onInputChange} required />
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input type="number" name="salary" value={formData.salary} onChange={onInputChange} required />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <input type="number" name="experience" value={formData.experience} onChange={onInputChange} required />
        </div>
        <button type="submit">Add Employee</button>
      </div>
    </form>
  );
};

export default InsertRowForm;
