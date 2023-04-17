import React, { useState } from "react";
//import { TextCenter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Stack} from "react-bootstrap";

const GetPage = () => {
    return (
        <center>
                <div className="p-5 mb-2 rounded-3">
                <div className="container-fluid py-5">
                <main aria-hidden="true">  
                    <h1 className="display-5 fw-bold">Get...</h1>
                </main>
                    <Stack gap={2} className="col-md-4 mx-auto">
                        <Button href = '/Temperature'>
                            Temperatures
                        </Button>
                        <Button href = '/DirectRadiation'>
                            Direct Radiation
                        </Button>
                        <Button href = '/IndirectRadiation'>
                            Indirect Radiation
                        </Button>
                    </Stack>
                </div>
            </div>
        </center>
    );
}

export default GetPage;