# Dusty's Salary Calculator

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

- An app that has an input form for employees.
  - Takes in first name, last name, ID number, job title, annual salary.
  - Submit button stores the data
- The app uses the stored information to calculate monthly costs, which it displays on the DOM
  - If monthly cost exceeds $20,000 The total monthly cost receives a red background.
- Delete button for removing employees from the DOM.
  - Base mode does not need to remove that employee's salary from the reported total

## TODO

### Input Form

- [x] Input Employee Data
  - [x] First Name
  - [x] Last Name
  - [x] ID
  - [x] Title
  - [x] Annual Salary
- [x] Submit Button
  - [x] Takes in the data for storage
  - [x] Clear input fields on click

### Output to Table

- [ ] Display Table
- [x] Table has Header with pertinent information
  - [x] First Name
  - [x] Last Name
  - [x] ID
  - [x] Title
  - [x] Annual Salary
  - [x] Additional column for delete button
- [x] Display each employee after input
  - [x] Delete button appears next to each employee in column
  - [x] Delete button works
- [ ] Display Total Monthly Cost
  - [ ] Take in all the annual salaries and add them up
  - [ ] Divide them by 12 (monthly)
  - [ ] Update DOM to s
