const employee= {
    name:"Ernesto",
    address:"777 Eldridge Avenue"
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee={...employee};
    newEmployee[key]=value;
    return newEmployee;
    return employee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,name){
    const newEmployee={...employee};
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,nameP){
    delete employee.name;
    return employee;
}