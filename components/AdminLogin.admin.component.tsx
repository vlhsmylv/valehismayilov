import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebase.config";

const AdminLogin = ({ updateAuth }: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateAuth(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form
      className="border rounded mt-5 m-auto bg-light p-3"
      style={{
        maxWidth: "400px",
      }}
      onSubmit={handleLogin}
    >
      <div className={"text-center fs-2 fw-bold"}>Admin</div>
      <div className="d-flex flex-column mt-2">
        <label>Email</label>
        <input
          className="mt-1 form-control"
          type="email"
          placeholder="Enter email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="d-flex flex-column mt-2">
        <label>Password</label>
        <input
          className="mt-1 form-control"
          type="password"
          placeholder="Enter password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="fw-bold text-danger text-center mt-2">{error}</div>
      <div className="mt-3">
        <input type="submit" value="Login" className="btn btn-dark w-100" />
      </div>
    </form>
  );
};

export default AdminLogin;
