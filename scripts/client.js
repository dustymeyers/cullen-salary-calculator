console.log('Hello World');
$(document).ready(readyOn);

const employeeData = [];
const deletedData = [];

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
  // TODO - get info from the deleted field
  // may need to use .text() or .data()
  // push into a deleted array?
}

// below function made to remove data completely from the array
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
  $('#input-form').submit('#submit-employee-info-button', addEmployeeData);
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
  let el = $('#monthly-cost-value');
  // loop through the array elements
  for (let i = 0; i < employeeData.length; i++) {
    totalAnnualSalaries += employeeData[i].annualSalary;
  }
  console.log('cost added up', totalAnnualSalaries);
  // convert total annual salaries to total monthly salary
  let totalMonthlySalaries = Number((totalAnnualSalaries / 12).toFixed(2)); // 12 is from number of months in a year
  console.log(`Total month salary now is:`, totalMonthlySalaries);
  // change the DOM
  // clear out the space
  el.empty();
  // update it with new number
  el.append(`$${totalMonthlySalaries}`);
  // Check if the total monthly sales are higher than 20000
  if (totalMonthlySalaries > 20000) {
    $('#monthly-cost-value').css('background-color', 'red').append();
  }
}
