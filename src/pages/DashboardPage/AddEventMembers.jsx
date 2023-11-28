import React, { useState } from 'react';
import './DashboardPage.scss'


const AddEventMembers = () => {
  const [memberName, setMemberName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can perform the logic to add the event member to your system.
    // For simplicity, let's just log the member details for now.
    console.log('Member Name:', memberName);
    console.log('Member Email:', memberEmail);

    // You can add additional logic to send member data to the server, update state, etc.
  };

  return (
    <div className='dashboard  details'>
      <h2>Add Event Members</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="memberName"
            placeholder="Enter Member Name"
            className='textbox'
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="memberEmail"
            placeholder="Enter Member Email"
            className='textbox'
            value={memberEmail}
            onChange={(e) => setMemberEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="register-btn">Add Member</button>
        </div>
      </form>
    </div>
  );
};

export default AddEventMembers;
