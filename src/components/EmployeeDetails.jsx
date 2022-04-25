import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({
    id: "",
    employee_name: "",
    employee_id: "",
    title: "",
    salary: "",
    image: "",
    username: "",
    password: "",
    tasks: [],
    status: "",
    team: "",
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee/${id}`)
      .then((res) => setEmployee(res.data));
  }, [id]);

  console.log(employee);

  return (
    <div className="user_details">
      <img src={employee.image} alt="employee" className="employee_image" />
      <h4 className="user_name">{employee.employee_name}</h4>
      <span className="user_salary">${employee.salary}</span>
      <span className="tasks">
        {employee.tasks.map((e) => (
          <li className="task">{e}</li>
        ))}
      </span>
      Status: <b className="status">{employee.status}</b>
      Title: <b className="title">{employee.title}</b>
      {employee.status !== "terminated" ? (
        <button className="fire">Fire Employee</button>
      ) : (
        ""
      )}
      {employee.status !== "terminated" && employee.title !== "Team Lead" ? (
        <button className="promote">promote</button>
      ) : (
        ""
      )}
    </div>
  );
};
