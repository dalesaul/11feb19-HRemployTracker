const buildSingleEmployee = (singleEmployeeObject) => {
    return `<div id="employeeContainer">
    <lable>
    <p>${singleEmployeeObject.firstName}</p>
    <p>${singleEmployeeObject.lastName}</p>
    <p>${singleEmployeeObject.email}</p>
    <p>${singleEmployeeObject.phoneNumber}</p>
    <p>${singleEmployeeObject.birthday}</p>
    <p>${singleEmployeeObject.department}</p>
    <p>${singleEmployeeObject.supervisor}</p>
    <p>${singleEmployeeObject.gender}</p>
    </lable>
    <a class="btn-floating btn-small waves-effect waves-light red"><i id="delete-${singleEmployeeObject.id}" class="material-icons delete-btn">delete</i></a>
    </div>`
};

