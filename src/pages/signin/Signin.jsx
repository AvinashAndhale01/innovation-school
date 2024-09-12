import { useState } from "react";
import { loginApi } from "../../api/auth/auth";
import {
  customToast,
  toastTypes,
} from "../../components/customToast/customToast";
import { Spin, Card, Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App"; // Adjust the import path as necessary
import "./signin.scss";

const { Title } = Typography;

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
    if (!reqBody.email || !reqBody.password) {
      customToast(toastTypes.error, "Please fill in all fields.");
      return;
    }
    setLoading(true);
    loginApi(reqBody)
      .then((val) => {
        console.log(val);
        if (val.success) {
          customToast(toastTypes.success, "Login Successfully!");
          localStorage.setItem("auth-Token", val.token);
          login();
          navigate("/dashboard");
          setReqBody(initReqBody);
        } else {
          customToast(toastTypes.error, "Check Email or Password!");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="sign-in">
      <Spin spinning={loading}>
        <Card
          className="sign-in-card"
          bordered={false}
          style={{ maxWidth: 400, margin: "0 auto" }}
        >
          <Title level={2} style={{ textAlign: "center" }}>
            Sign In
          </Title>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                type="text"
                value={reqBody.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                value={reqBody.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Enter your password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Spin>
    </div>
  );
}

export default Signin;
