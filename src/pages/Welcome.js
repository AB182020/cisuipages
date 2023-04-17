// const Welcome =()=>
// {
//     <div>
//         <h1>
//             Sign In
//         </h1>
//         <body>
//         <div>
//             <h1>
//                UserName:
//                 PassWord:
//             </h1>
//         </div>
//         </body>
//     </div>
// }

import React, { useState } from "react";
//import { TextCenter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Stack} from "react-bootstrap";

export default function Welcome() {
    return (
        <center>
            <h1 className="display-5 fw-bold">Welcome Page</h1>
        </center>
    );
}