import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as client from "./client";

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const register = async () => {
    try {
      const newUser = await client.registerUser(user);
      console.log(newUser);
      navigate("/Kanbas/Account/profile");
    } catch (e: any) {
      setError(e.response.data);
      console.log(e.response.data);
    }
  };

  return (
    <div>
      <div
        className="card mx-auto my-auto text-center"
        style={{ width: "50%" }}
      >
        <div className="card-body">
          <h2 className="card-title text-success">Sign Up</h2>
          <p className="card-text">Unlock your access to Kanbas...</p>
          {error && (
            <div className="alert alert-danger mb-2 mt-2"> {error}</div>
          )}
          <input
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="form-control m-2 mb-4"
            placeholder="Username"
          />
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="form-control m-2 mb-4"
            placeholder="Password"
            type={"password"}
          />

          <div className="d-flex justify-content-between">
            <button onClick={register} className="btn btn-success w-50 m-2">
              Register
            </button>
            <Link
              to="/Kanbas/Account/login"
              className="btn btn-outline-primary w-50 m-2"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
