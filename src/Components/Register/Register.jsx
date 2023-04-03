import { Button, TextField } from '@mui/material';
import React from 'react';
import Google from '../Icon/Google';
import ProfileIcon from '../Icon/ProfileIcon';

function Register({getRegister}) {
    return (
        <div className="auth">
          <div className="auth-banner">
            <div className="auth-content">
              <span>Looks like you're new here!</span>
              <p>Sign up with your mobile number to get started</p>
            </div>
          </div>
          <div className="auth-fields">
            <div className="login-controls">
              <ProfileIcon options={"auth-profile"} />
             <TextField ></TextField>
              <div className="login-or">
                <hr />
                <span>Or</span>
                <hr />
              </div>
              <Button
                className="login-button"
                style={{ color: "#2874f0" }}
                variant="outlined"
                startIcon={<Google />}
              >
                Signup with Google
              </Button>
            </div>
            <div className="auth-bottom">
              <span onClick={()=>getRegister(false)}>Existing User? Login</span>
              
            </div>
          </div>
        </div>
    );
}

export default Register;