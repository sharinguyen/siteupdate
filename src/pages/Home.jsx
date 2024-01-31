import React from "react";
import {Link} from 'react-router-dom';
import BannerImage from '../assets/horse-forest.png';
import '../styles/Home.css';

{/*Home page contains banner image */}
{/*NEED TO ADD GALLERY THAT HAS UPDATE OF EVENTS AND SALES */}
function Home(){
    return (
        
        /*uses css class home throughout to set styles */
        <div className="home">
            {/*uses headcontainer that has text and slogan with 
            banner img to change use the import above  */}
            <div className="headerContainer" 
        style={{
            backgroundImage: `url(${BannerImage})`
          }}
          >
                <h1>Great Games Escape</h1>
                <p>Free your imagination</p>
                {/*Links to product store using buttons */}
                <Link to="Product">
                <button> Shop Products</button>
                </Link>
               
            </div>
            {/* Under devlopment uses container in Home.css */}
            <div className="bodyContainer">
                <p>update gallery</p>
            <h1>Location/Hours of Operations:</h1>
        <br />
        <h2>@ Sacramento</h2>

      
        <ul>
            <li>1250 Howe Ave #3a, Sacramento, CA 95825 </li>
            <li>Mon 12pm - 8pm</li>
            <li>Tues 12pm - 10pm </li>
            <li>Wed 12pm - 8pm</li>
            <li>Thu 12pm - 10pm </li>
            <li>Fri 12pm - 11pm </li>
            <li>Sat 12pm - 10pm </li>
            <li>Sun 12pm - 6pm </li>
        </ul>
        
        <br />
        <h2>@ Rocklin</h2>
      
       
        <ul>
            <li>5050 Rocklin Road, Suite A22, Rocklin, CA 95677</li>
            <li>Mon 12pm - 7pm</li>
            <li>Tues 12pm - 7pm </li>
            <li>Wed 12pm - 9pm</li>
            <li>Thu 12pm - 7pm </li>
            <li>Fri 12pm - 11pm </li>
            <li>Sat 12pm - 10pm </li>
            <li>Sun 12pm - 6pm </li>
        </ul>
        </div>
    
    </div>
    );

}

export default Home;