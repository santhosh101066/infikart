import React from 'react';
import ProfileIcon from '../Icon/ProfileIcon';
import { Button } from '@mui/material';
import Google from '../Icon/Google';

function Login({getRegister}) {
    return (
        <div className="auth">
          <div className="auth-banner">
            <div className="auth-content">
              <span>Login</span>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
          </div>
          <div className="auth-fields">
            <div className="login-controls">
              <ProfileIcon options={"auth-profile"} />
              <Button
                className="login-button"
                color={"warning"}
                variant="contained"
              >
                Login with Okta
              </Button>
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
                Login with Google
              </Button>
            </div>
            <div className="auth-bottom">
              <span onClick={()=>getRegister(true)}>New to Infikart? Create an account</span>
              
            </div>
          </div>
        </div>
    );
}

export default Login;