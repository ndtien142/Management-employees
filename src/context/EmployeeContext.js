import React, { useEffect, useState } from "react";

const EmployeeContext = React.createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/employees");
      const responseJson = await response.json();

      setEmployees(responseJson);
    };

    fetchData();
  }, []);

  const deleteEmployee = async (id) => {
    await fetch(`http://localhost:3001/employees/${id}`, { method: "DELETE" });
    setEmployees(
      employees.filter((employee) => {
        return employee.id !== id;
      })
    );
  };

  const createEmployee = async ({ name, details, gender, type }) => {
    const response = await fetch(`http://localhost:3001/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, details, gender, type }),
    });
    const data = response.json();
    setEmployees([...employees, data]);
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, deleteEmployee, createEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;
