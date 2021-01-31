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

function deleteEmployeeData(event) {
  event.preventDefault();
  // remove the row from the dom
  $(this).closest('tr').empty();
}

// TODO - change this function to only remove from the dom
// function deleteEmployeeData(event) {
//   console.log('deleteEmployeeData', this.value);
//   event.preventDefault();
//   // grab a unique value from the table
//   let employee = this.value;
//   // target the employee that was clicked
//   for (let i = 0; i < employeeData.length; i++) {
//     // compare with data in the array
//     if (employee === employeeData[i].employeeID) {
//       // remove from array
//       employeeData.splice(i, 1);
//     }
//   }
//   // render data;
//   renderEmployeeData(employeeData);
// }

function readyOn() {
  console.log('readyOn');
  // On Add Item submit
  // will save inventory object to array
  $(document).on('click', '#submit-employee-info-button', addEmployeeData);
  // On delete button clicked
  $(document).on('click', '.delete-button', deleteEmployeeData);
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
        // use a class for button since there is more than one.
        <td>
          <button class="delete-button" value="${employee.employeeID}">Delete</button>
        </td>
      </tr>
    `);
  }
  // Calculate Monthly COST
  calculateMonthlyCost();
  //
}

function calculateMonthlyCost() {
  // set a value for adding the annual salaries
  let totalAnnualSalaries = 0;
  // set a value for the element we will manipulate
  let el = $('#monthly-cost');
  // loop through the array elements
  for (let i = 0; i < employeeData.length; i++) {
    totalAnnualSalaries += employeeData[i].annualSalary;
  }
  console.log('cost added up', totalAnnualSalaries);
  // convert total annual salaries to total monthly salary
  let totalMonthlySalaries = Math.round(totalAnnualSalaries / 12); // 12 is from number of months in a year
  console.log(totalMonthlySalaries);
  // change the DOM
  // clear out the space
  el.empty();
  // update it with new number
  el.append(totalMonthlySalaries);
}
