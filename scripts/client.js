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
  $('#first-name-input').val('');
  $('#last-name-input').val('');
  $('#employee-id-input').val('');
  $('#employee-title-input').val('');
  $('#annual-salary-input').val('');
  // Update DOM to have input data.
  // add a row to the table
  renderEmployeeData(employeeData);
}

function readyOn() {
  console.log('readyOn');
  // On Add Item submit
  // will save inventory object to array
  $(document).on('click', '#submit-employee-info-button', addEmployeeData);
}

function renderEmployeeData(dataArray) {
  $('#employee-data-output').empty();
  for (let employee of dataArray) {
    $('#employee-data-output').append(`
      <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.employeeID}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td><button class="delete button">Delete</button></td>
      </tr>
    `);
  }
}
