import React, { useState } from 'react';
import './DashboardPage.scss'


const AddEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [priceMoney, setPriceMoney] = useState('');
  // Add more state variables as needed

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any additional logic, validation, or API calls here

    // Reset the form after submission
    setEventName('');
    setEventDetails('');
    setPriceMoney('');
    // Reset other state variables as needed
  };

  return (
    <div className='dashboard details'>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="eventName"
            className='textbox'
            placeholder="Enter Event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>

        <div>
          <textarea
            id="eventDetails"
            className='textbox'
            placeholder="Enter Details"
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="text"
            className='textbox'
            placeholder="Enter Price Money"
            id="priceMoney"
            value={priceMoney}
            onChange={(e) => setPriceMoney(e.target.value)}
            required
          />
        </div>

        {/* Add more form fields as needed */}

        <div>
          <button type="submit" className="register-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
