import React, { useState } from "react";
//import { TextCenter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Stack} from "react-bootstrap";
import DirectRadiation from "./DirectRadiation";

function Country() {
    return (
        <center>
            <h1 className="display-5 fw-bold">Choose Year</h1>
            <div>
            1980
            </div>
            <div>
              1981
            </div>
            <div>
                ************************************
            </div>
            <Button href = '/GetPage'>
                Back
            </Button>
        </center>
    );
}

export default Country;