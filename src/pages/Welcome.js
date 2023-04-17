import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth, logInWithEmailAndPassword} from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBValidation,
    MDBValidationItem
} from "mdb-react-ui-kit";

function Welcome()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const nav = () =>
    {
        if (!username || !password) {
            document.getElementById('form').reset();
            if (!username) {
                username("");
            }
            if (!password) {
                setPassword("");
            }
        } else {
            logInWithEmailAndPassword(username, password)
        }
    }
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            nav("/home");
        } else if (user == null) {
            nav("/login");
        }
    }, [user, loading]);

    return (
        <MDBContainer fluid>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                            <h2 className="fw-bold mb-2 text-center">Log In</h2>

                            <MDBValidation className="row g-3" id="form">

                                <p className="text-white-50 mb-3"></p>

                                <MDBValidationItem>
                                    <MDBInput
                                        wrapperClass='mb-4 w-100'
                                        label='Email Address'
                                        id='validationCustom01'
                                        type='email'
                                        required
                                        size="lg"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </MDBValidationItem>

                                <MDBValidationItem>
                                    <MDBInput
                                        wrapperClass='mb-4 w-100'
                                        label='Password'
                                        id='validationCustom02'
                                        required
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        size="lg"
                                    />
                                </MDBValidationItem>

                                <button
                                    className="btn btn-primary"
                                    onClick={Welcome}
                                >
                                    Login
                                </button>

                                <p className="text-white-50 mb-3"></p>
                                <div className="text-center">
                                    Don't have an account? <Link to="/register">Register</Link> now.
                                </div>

                            </MDBValidation>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );


}