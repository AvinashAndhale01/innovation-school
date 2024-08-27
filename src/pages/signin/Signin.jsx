import React, { useState } from "react";
import { email } from "../../assets/icons";
import { loginApi } from "../../api/auth/auth";
import {
  customToast,
  toastTypes,
} from "../../components/customToast/customToast";
import CustomSpinner from "../../components/customSpinner/CustomSpinner";
import { useNavigate } from "react-router-dom";

function Signin() {
  const initReqBody = {
    email: "",
    password: "",
  };

  const [reqBody, setReqBody] = useState(initReqBody);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handelChange = (name, value) => {
    setReqBody({ ...reqBody, [name]: value });
  };

  const handekSubmit = () => {
    for (const i in reqBody) {
      if (reqBody[i] === "") {
        customToast(toastTypes.error, `Please Enter ${i}`);
        return;
      }
    }
    setLoading(true);
    loginApi(reqBody)
      .then((val) => {
        console.log(val);
        if (val.success === true) {
          customToast(toastTypes.success, "Login Successfully !");
          localStorage.setItem("auth-Token", val.token);
          navigate("/");
          setReqBody(initReqBody);
        } else {
          customToast(toastTypes.error, "Check Email or Password !");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <CustomSpinner />
      ) : (
        <div>
          <input
            type="text"
            value={reqBody.email}
            onChange={(e) => handelChange("email", e.target.value)}
          />
          <input
            type="password"
            value={reqBody.password}
            onChange={(e) => handelChange("password", e.target.value)}
          />
          <button onClick={handekSubmit}>Login</button>
        </div>
      )}
    </>
  );
}

export default Signin;
