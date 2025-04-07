import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar'; // Make sure Sidebar is in the same folder or adjust path
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const data = [
    { id: 1, name: 'John Doe', role: 'Lawyer' },
    { id: 2, name: 'Jane Smith', role: 'Judge' },
    { id: 3, name: 'Michael Lee', role: 'Clerk' },
    { id: 4, name: 'Samantha Brown', role: 'Lawyer' },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid p-4 ">
        <div className="header bg-dark mt-2 py-2">
         <h className="text-light  mt-2 mb-2 px-3">Search Cause List</h>

        </div>

        {/* Search Input */}
        <div className="mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-secondary">
              <tr>
                <th>Sr No</th>
                <th>Case No</th>
                <th>Petitioners & Responders</th>
                <th>Petitioner Council</th>
                <th>Petitioner Council</th>

              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((person, index) => (
                  <tr key={person.id}>
                    <td>{index + 1}</td>
                    <td>{person.name}</td>
                    <td>{person.role}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-muted">No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search;
