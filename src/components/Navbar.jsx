import React, {useState} from "react";
import Logo from "../assets/GEG-white.png";
import {Link}  from 'react-router-dom';
import '../styles/Navbar.css';


import AccountBox from '@mui/icons-material/AccountBox';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import ReorderIcon from'@mui/icons-material/Reorder';

function Navbar() {

    {/* set so that button can function*/}
    const[openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    };

return (
    /*navbar and link */
    <div className="navbar" >
        <div className="leftSide" id={openLinks ? "open": "close"}>
        <img src={Logo} alt="Great Escape Games Logo"/>
        <div className="hiddenLinks">
             <Link to ='./pages/Home'>Home</Link>
            <Link to ='./pages/Store'>Store</Link>
            <Link to ='./pages/Locations'>Locations</Link>
            <Link to ='./pages/PrivateRooms'>Private Rooms</Link>
            <Link to ='./pages/About'>About</Link>
            <Link to ='./pages/Contact'>Contact</Link>
        </div>

        </div>
     
        <div className="rightSide">
            <Link to ='./pages/Home'>Home</Link>
            <Link to ='./pages/Store'>Store</Link>
            <Link to ='./pages/Locations'>Locations</Link>
            <Link to ='./pages/PrivateRooms'>Private Rooms</Link>
            <Link to ='./pages/About'>About</Link>
            <Link to ='./pages/Contact'>Contact</Link>

            <div className = 'NavIcon'>
            <Link to='./pages/Login'>
          <AccountBox alt="account icon" />
        </Link>
        <Link to='./pages/About'>
           <ShoppingCart  alt="shopping cart"/>
           </Link>
           </div>
           <button onClick={toggleNavbar}>
           <ReorderIcon />
           </button>
           
        </div>

    </div>
);

}

export default Navbar;