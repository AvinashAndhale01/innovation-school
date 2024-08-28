import { useState } from "react";
import { loginApi } from "../../api/auth/auth";
import { customToast, toastTypes } from "../../components/customToast/customToast";
import CustomSpinner from "../../components/customSpinner/CustomSpinner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App"; // Adjust the import path as necessary
import "./signin.scss";

function Signin() {
  const initReqBody = {
    email: "",
    password: "",
  };

  const [reqBody, setReqBody] = useState(initReqBody);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth(); // Access login function from useAuth
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setReqBody({ ...reqBody, [name]: value });
  };

  const handleSubmit = () => {
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
        if (val.success) {
          customToast(toastTypes.success, "Login Successfully !");
          localStorage.setItem("auth-Token", val.token);
          login(); // Update authentication state
          navigate("/dashboard");
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
        <div className="sign-in">
          <div className="sign-in-card">
            <h2>Sign In</h2>
            <div className="email">
              <input
                type="text"
                value={reqBody.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="email"
              />
            </div>
            <div className="password">
              <input
                type="password"
                value={reqBody.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="password"
              />
            </div>
            <div className="submit-btn">
              <button onClick={handleSubmit}>Login</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signin;
