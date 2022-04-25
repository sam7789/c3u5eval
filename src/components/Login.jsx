import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";

export const Login = () => {
  //  use reqres to log user in.
  const [form, setForm] = useState({});
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setForm({ ...form, email: value });
    } else {
      setForm({ ...form, password: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/login", form).then((data) => {
      if (data.data.token) {
        handleAuth(true);
        navigate(-2, { replace: true });
      }
    });
  };

  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handleChange}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
