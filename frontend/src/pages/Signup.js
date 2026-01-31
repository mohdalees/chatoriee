import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/auth/signup",
        { name, email, password }
      );

      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data || "Signup failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-3">Signup</h3>

              <form onSubmit={handleSignup}>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-success w-100">
                  Signup
                </button>
              </form>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
