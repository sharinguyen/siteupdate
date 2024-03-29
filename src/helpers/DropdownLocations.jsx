import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DropdownLocations.css';
const DropdownLocations = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (

    /* when user hovers over location shows the location stores 
  and refirect */
    <div className="dropdownlocations">
      <div className="dropdown-trigger" 
      hover= {toggleDropdown}
      onClick={toggleDropdown}
     >
        <Link to='./pages/Locations'>Locations</Link>
      </div>

      {showDropdown && (
        <div className="dropdown-content">
          <Link to='./pages/About'>Sacramento</Link>
          <Link to='./pages/Rocklin'>Rocklin</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownLocations;
