import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    navigate("/home");
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Login</h3>
      <input className="form-control mb-2" placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />
      <input className="form-control mb-2" type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-success w-100" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
