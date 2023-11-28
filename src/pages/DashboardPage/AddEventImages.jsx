import React, { useState } from 'react';
import './DashboardPage.scss'


const AddEventImages = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can perform the logic to upload the image to your server or handle it as needed.
    // For simplicity, let's just log the selected image for now.
    console.log('Selected Image:', image);

    // You can add additional logic to send the image to the server, update state, etc.
  };

  return (
    <div className='dashboard  details'>
      <h2>Add Event Images</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            id="image"
            className='textbox'
            placeholder="Choose Image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div>
          <button type="submit" className="register-btn">Upload Image</button>
        </div>
      </form>
    </div>
  );
};

export default AddEventImages;
