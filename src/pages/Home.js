import React, { useState } from "react";
//import { TextCenter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Stack} from "react-bootstrap";
import DirectRadiation from "./DirectRadiation";

function Home()
{
    return (
        <center>
            <h1 className="display-5 fw-bold">Choose Country</h1>
            <div>
                Country 1
            </div>
            <div>
               Country 2
            </div>
            <div>
                ************************************
            </div>
            <Button href = '/Home'>
                Back
            </Button>
        </center>
    );
}