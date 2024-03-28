import React from 'react'
import { useState } from 'react';
import {useEffect} from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
  useEffect(() => {
    // Initialize Materialize dropdown
    const dropdownElement = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdownElement);
  }, []);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   age: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // Output formData object to console


  return (
    <div className="container">
    <div className="row">
      <div className="col s12">
        <table className="bordered">
          <thead>
            <tr>
              <th>Automation</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Thunderingherd</td>
              <td>
                <a className='dropdown-trigger btn' href='/' data-target='dropdown1'>
                  Options<i className="material-icons right">arrow_drop_down</i>
                </a>
                <ul id='dropdown1' className='dropdown-content'>
                  <li><a href="#!">TH-Job</a></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Taskrunner</td>
              <td>
                <a className='dropdown-trigger btn' href='/' data-target='dropdown2'>
                  Options<i className="material-icons right">arrow_drop_down</i>
                </a>
                <ul id='dropdown2' className='dropdown-content'>
                  <li><a href="#!">telnet</a></li>
                  <li><a href="#!">mysql process list</a></li>
                  <li><a href="#!">mysql select statements</a></li>
                  <li><a href="#!">performance object queries</a></li>
                </ul>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  );
}

export default Dashboard;
