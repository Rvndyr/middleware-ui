import React, { useState } from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  const [requestType, setRequestType] = useState(null);
  const [thunderingherdOption, setThunderingherdOption] = useState(null);
  const [taskrunnerOption, setTaskrunnerOption] = useState(null);

  const [taskrunner, thunderingHerd, OnPrem] = [['telnet', 'selects', 'mySQL process list'], [], ['validation']];

  // Handle the state for each requestType.
  const handleChange = (e, selectType) => {
    e.preventDefault();
    switch (selectType) {
      case 'requestType':
        setRequestType(e.target.value);
        break;
      case 'thunderingherdOption':
        setThunderingherdOption(e.target.value);
        break;
      case 'taskrunnerOption':
        setTaskrunnerOption(e.target.value);
        break;
      default:
        console.log('In Switch case: uh oh');
    }
  };

  let options;
  if (requestType === 'ThunderingHerd') {
    options = thunderingHerd.map((option, i) => (
      <option key={i} value={option}>
        {option}
      </option>
    ));
  } else if (requestType === 'Taskrunner') {
    options = taskrunner.map((option, i) => (
      <option key={i} value={option}>
        {option}
      </option>
    ));
  }

  return (
    <form>
      <label htmlFor="">Reported by</label>
      <input type="reported by" />
      <label htmlFor="">Product</label>
      <input type="product" />
      <label>Request Type</label>
      <select value={requestType} onChange={(e) => handleChange(e, 'requestType')}>
        <option value="">--Please choose an option--</option>
        <option value="ThunderingHerd">ThunderingHerd</option>
        <option value="Taskrunner">Taskrunner</option>
      </select>
      <label htmlFor="">Instance Name</label>
      <input type="InstanceName" />

      {requestType && (
        <>
          <label htmlFor='automation_job'>{requestType}</label>
          <select name={requestType} onChange={(e) => handleChange(e, requestType)}>
            {options}
          </select>
        </>

      )}
    </form>
  );
};

export default Dashboard;