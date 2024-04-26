const department = departments[departmentIndex];
  const employees = report.allEmployees[department];
  
  if (employeeIndex >= employees.length) {
    departmentIndex++;
    employeeIndex = 0;
    return this.next();
  }
  
  const employee = employees[employeeIndex];
  employeeIndex++;
  
  return {
    value: employee,
    done: false
  };
}
