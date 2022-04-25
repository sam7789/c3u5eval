import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee").then((data) => {
      setState(data.data);
    });
  }, []);
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {state.map((e, i) => (
        <Link to={`/employees/${e.id}`}>
          <div className="employee_card">
            <img className="employee_image" alt="employee" src={e.image} />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
