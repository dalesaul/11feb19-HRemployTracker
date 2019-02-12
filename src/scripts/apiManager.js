const createRecord = employeeToAdd => {
    return fetch("http://localhost:8088/employees", {
       method: "POST",
       headers: {
           "Content-type": "application/json"
       },
       body: JSON.stringify(employeeToAdd)
    });
};

const deleteEmployee = (employeeID) => {
    return fetch(`http://localhost:8088/employees/${employeeID}`,{
        method: "DELETE"
    });

};


const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees").then(employees =>
    employees.json()
    );
};