const printAllEmployees = () => {
    document.querySelector("#employeeContainer").innerHTML = "";
    getAllEmployees()
    .then(allEmployees => {
        allEmployees.forEach(singleEmployee => {
            document.querySelector("#employeeContainer").innerHTML += buildSingleEmployee(singleEmployee)
        });
    });
};