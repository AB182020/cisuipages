import React, { useState } from "react";
//import { TextCenter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Stack} from "react-bootstrap";

export default function Temperature() {
    return (
        <center>
            <center>
                <h1 className="display-5 fw-bold">Temperature Recordings Of</h1>
                <div>
                    measurement 1
                </div>
                <div>
                    measurement 2
                </div>
                <div>
                    ************************************
                </div>
                <Button href = '/GetPage'>
                    Back
                </Button>
            </center>
        </center>
    );
}