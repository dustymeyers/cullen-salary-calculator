console.log('Hello World');
$(document).ready(readyOn);

const employeeData = [];

function addEmployeeData(event) {
  event.preventDefault();
  console.log('addEmployeeData');
  // create an object literal to store the data in
  // push object to the array
  // clear form
}

function readyOn() {
  console.log('readyOn');
  $(document).on('submit', '#submit-employee-info-button', addEmployeeData);
}
