console.log('Hello World');
$(document).ready(readyOn);

const employeeData = [];

function addEmployeeData(event) {
  event.preventDefault();
  console.log('addEmployeeData');
  // grab input data from the DOM
  let firstName = $('#first-name-input').val();
  let lastName = $('#last-name-input').val();
  let employeeID = $('#employee-id-input').val();
  let title = $('#employee-title-input').val();
  let annualSalary = $('#annual-salary-input').val();
  // create an object literal to store the data in
  const employee = {
    firstName: firstName,
    lastName: lastName,
    employeeID: employeeID,
    title: title,
    annualSalary: Number(annualSalary),
  };
  console.log('employee added', employee);
  // push object to the array
  employeeData.push(employee);
  // clear form
}

function readyOn() {
  console.log('readyOn');
  // On Add Item submit
  // will save inventory object to array
  $(document).on('click', '#submit-employee-info-button', addEmployeeData);
}
