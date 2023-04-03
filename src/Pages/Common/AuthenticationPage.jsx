import React, { useState } from "react";
import "../../Assets/Css/Authentication.css";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";

function AuthenticationPage(props) {
  let [isRegister, getRegister] = useState(false);
  return (
    <div className="auth-back">
      <div className="auth-container">
        {isRegister ? <Register getRegister={getRegister} />: <Login getRegister={getRegister}/>}

        <button className="auth-close">
          <b>X</b>
        </button>
      </div>
    </div>
  );
}

export default AuthenticationPage;
