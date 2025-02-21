import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../../services/UserService";
import Validation from "./LoginValidation";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setErrors({ general: "Email và mật khẩu không được để trống." });
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Mẫu kiểm tra email cơ bản
    if (!emailPattern.test(email)) {
        setErrors({ general: "Email không hợp lệ." });
        return;
    }
    const validationErrors = Validation({ email, password });
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }
    const user = { email, password };

    try {
      const response = await UserService.login(user);
      console.log("Login API response:", response); // Log the response for debugging

      // Check if response is structured as expected
      if (response && response.status === true) {
        const { user: userData, token } = response; // Adjust based on your API response structure

        localStorage.setItem("sessionToken", token);
        localStorage.setItem("userData", JSON.stringify(userData)); // Make sure `userData` has all the fields you need

        navigate("/home/profile");
      } else {
        console.error("Unexpected response structure:", response);
        setErrors({ general: "Unexpected response structure" });
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      if (error.response && error.response.status === 401) 
      {
        setErrors({ general: "Wrong email or password. Please try again." });
      } else {
        setErrors({ general: "An error has occurred. Please try again." });
      }    
    }
  };

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center bg-light">
      <div className="card shadow-lg p-4" style={{ width: "24rem" }}>
        <h2 className="text-center text-primary mb-3">Đăng Nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
            {errors.email && (
                  <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="text-center text-muted mt-3">
          Don't have an account?{" "}
          <Link to="/signup" className="text-decoration-none">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
