export default function createIteratorObject(report) {
  let departmentIndex = 0;
  let employeeIndex = 0;
  const departments = Object.keys(report.allEmployees);
  
  return {
    next: function() {
      if (departmentIndex >= departments.length) {
        return {
          value: undefined,
          done: true
        };
      }
      
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
  };
}
