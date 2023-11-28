import React, { useState } from 'react';
import AddEventForm from './AddEventForm';
import AddEventImages from './AddEventImages';
import AddEventMembers from './AddEventMembers';
import './DashboardPage.scss';

const DashboardPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='dashboard'>
      <div id="header">
        {/* Header content */}
      </div>
      <div className='column'>
        <div className='add-events-heading'>DASHBOARD</div>
        <a className='add-events' href="#" onClick={() => handleOptionClick('ADD-EVENTS')}>
          ADD-EVENTS
        </a>
        <a className='add-events' href="#" onClick={() => handleOptionClick('ADD-IMAGES')}>
          ADD-IMAGES
        </a>
        <a className='add-events' href="#" onClick={() => handleOptionClick('ADD-MEMBERS')}>
          ADD-MEMBERS
        </a>
      </div>

      {/* Render the selected form based on the option */}
      {selectedOption === 'ADD-EVENTS' && <AddEventForm />}
      {selectedOption === 'ADD-IMAGES' && <AddEventImages />}
      {selectedOption === 'ADD-MEMBERS' && <AddEventMembers />}
    </div>
  );
};

export default DashboardPage;
