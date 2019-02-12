printAllEmployees();

document.querySelector("#submit-btn").addEventListener("click", () => {
  const fNameValue = document.querySelector("#fNameInput").value;
  const lNameValue = document.querySelector("#lNameInput").value;
  const emailValue = document.querySelector("#emailInput").value;
  const phoneValue = document.querySelector("#phoneInput").value;
  const bDayValue = document.querySelector("#bDayInput").value;
  const deptValue = document.querySelector("#deptInput").value;
  const supervisorValue = document.getElementById("isSupervisor").checked;
  const genderValue = document.querySelector(".with-gap").checked;


  const employeeToAdd = {
    firstName: fNameValue,
    lastName: lNameValue,
    email: emailValue,
    phoneNumber: phoneValue,
    birthday: bDayValue,
    department: deptValue,
    supervisor: supervisorValue,
    gender:genderValue
  };
  debugger;
  createRecord(employeeToAdd).then(() => {
    printAllEmployees();
  });
});

document.querySelector("#employeeContainer").addEventListener("click", () =>{
    if (event.target.classList.contains("delete-btn")) {

        const employeeID = event.target.id.split("-")[1];
        deleteEmployee(employeeID)
        .then(() => {
            printAllEmployees()
        });
    };
});