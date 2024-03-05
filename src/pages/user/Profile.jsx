import React, { useState } from 'react';
import img from '../../assets/images/user.png';

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('User1');
  const [email, setEmail] = useState('user1@gmail.com');

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform save/update logic here
    setIsEditMode(false);
  };

  const handleCancelClick = () => {
    // Reset form values and exit edit mode
    setName('User1');
    setEmail('user1@gmail.com');
    setIsEditMode(false);
  };

  return (
      <section className="text-black body-font  bg-yellow-100" style={{minHeight:"100vh"}}>
        <div className="container px-5 py-12 flex flex-wrap bg-yellow-100">
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img className="object-cover object-center h-80 w-80 float-right mr-8" src={img} alt="stats" />
          </div>
          <div className="-mx-4 mt-0 mb-auto my-10 lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">My Profile</h1>
            </div>
            {isEditMode ? (
              // Editable form fields
              <>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 bg-yellow-100">
                  <input
                    type="text"
                    className="w-full p-2 border-b border-yellow-100"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <br />
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <input
                    type="text"
                    className="w-full p-2 border-b border-yellow-100"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div className="flex p-3 sm:w-1/2 lg:w-1/4 w-1/2 mx-5">
                  <button
                    className="text-white bg-yellow-500 border-10 py-2 px-6 mr-8 focus:outline-none hover:bg-yellow-200 rounded text-lg"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-200 rounded text-lg"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              // Display mode
              <>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <p className="leading-relaxed">Name: {name}</p>
                </div>
                <br />
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <p className="leading-relaxed">Email: {email}</p>
                </div>
                <br />
                <div className="flex p-3 sm:w-1/2 lg:w-1/4 w-1/2 mx-5">
                  <button
                    className="text-white bg-yellow-500 border-10 py-5 px-8 mr-8 focus:outline-none hover:bg-yellow-200 rounded text-lg"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
  );
};

export default Profile;