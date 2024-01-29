import React from 'react';
import {Link} from "react-router-dom";
import InstagramIcon from'@mui/icons-material/Instagram';
import FaceBookIcon from'@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import "../styles/Footer.css";

function Footer() {
    return <div className="footer">
        <div className="socialMedia">
        <InstagramIcon /><FaceBookIcon  /><TwitterIcon />
        </div>
        <p>&copy; 2023 Great Escape Games</p>
        </div>;
}

export default Footer;