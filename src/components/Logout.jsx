import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export const Logout = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    handleAuth(false);
    navigate("/");
  });
  return <div></div>;
};
