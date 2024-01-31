/* Sacramento store infomation */
import React from 'react';

function SacramentoInfo() {
return (
<div className = 'InfoFormat'>
            <p>1250 Howe Ave #3a, Sacramento, CA 95825 </p>
            <p>Phone:
              <a href ="tel: +1 916 927 0810">+1 916 927 0810</a>
            </p>
            <ul>
                <h1>Hours</h1>
            <li>Mon 12pm - 8pm</li>
            <li>Tues 12pm - 10pm </li>
            <li>Wed 12pm - 8pm</li>
            <li>Thu 12pm - 10pm </li>
            <li>Fri 12pm - 11pm </li>
            <li>Sat 12pm - 10pm </li>
            <li>Sun 12pm - 6pm </li>
            </ul>
</div>
);
}

export default SacramentoInfo;