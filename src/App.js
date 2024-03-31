import React, { useState } from 'react';
import TableContent from './components/TableContent';
import SearchBar from './components/SearchBar';
import './App.css';

// test

const App = () => {
  const [employeesData, setEmployeesData] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      position: 'Software Engineer', 
      department: 'Engineering', 
      age: 30, 
      salary: 80000, 
      experience: 5 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      position: 'UI/UX Designer', 
      department: 'Design', 
      age: 28, 
      salary: 70000, 
      experience: 4 
    },
    { 
      id: 3, 
      name: 'Michael Johnson', 
      position: 'Product Manager', 
      department: 'Product Management', 
      age: 35, 
      salary: 100000, 
      experience: 7 
    },
    { 
      id: 4, 
      name: 'Emily Brown', 
      position: 'Marketing Specialist', 
      department: 'Marketing', 
      age: 32, 
      salary: 75000, 
      experience: 6 
    },
    { 
      id: 5, 
      name: 'William Taylor', 
      position: 'Data Analyst', 
      department: 'Analytics', 
      age: 27, 
      salary: 65000, 
      experience: 3 
    }
  ]);

  // use a React Hook for state management, in this case the current text in the search bar
  const [searchQuery, setSearchQuery] = useState('');

  // update the searchQuery based on what the text in the search bar is
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // state management for adding a row
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    age: '',
    salary: '',
    experience: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { id: employeesData.length + 1, ...formData };
    setEmployeesData([...employeesData, newEmployee]);
    setFormData({
      name: '',
      position: '',
      department: '',
      age: '',
      salary: '',
      experience: ''
    });
  };

  
  const filteredData = employeesData.filter((employee) => {
    const employeeValues = Object.values(employee);

    return employeeValues.some(value =>{
      // use of .includes allows for partial searching (eg searchQuery of 7 yields row with value 70000)
      if (typeof value === 'string') {
        // convert both table value and searchQuery to lower case
        return value.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (typeof value === 'number') {
        // convert table number to string for comparison
        return value.toString().includes(searchQuery);
      }
      return false;
    });
  });


  return (
    <div className="App">
      <h1>Employee Table</h1>
      
      <SearchBar onSearch={handleSearch}/>
      <TableContent 
        data={filteredData} 
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      
    </div>
  );
}



export default App;
