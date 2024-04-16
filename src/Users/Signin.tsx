import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { User } from "./client";
import * as client from "./client";

export default function SignIn() {
  const [error, setError] = useState("");

  const [credentials, setCredentials] = useState<any>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      const existingUser = await client.loginUser(credentials);
      console.log(existingUser);
      navigate("/Kanbas/Account/profile");
    } catch (e: any) {
      console.log(e);
      setError(e.response.data);
    }
  };

  return (
    <div>
      <div
        className="card mx-auto my-auto text-center"
        style={{ width: "50%" }}
      >
        <div className="card-body">
          <h2 className="card-title text-primary">Sign In</h2>
          {error && (
            <div className="alert alert-danger mb-2 mt-2"> {error}</div>
          )}
          <input
            className="form-control mb-4"
            value={credentials.username}
            placeholder="Enter your Username"
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <input
            className="form-control mt-2 mb-4"
            value={credentials.password}
            placeholder="Enter your Password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />

          <div className="d-flex justify-content-between">
            <button className="btn btn-primary w-50 m-2" onClick={signin}>
              {" "}
              Signin{" "}
            </button>
            <Link
              to="/Kanbas/Account/register"
              className="btn btn-outline-warning w-50 m-2"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
