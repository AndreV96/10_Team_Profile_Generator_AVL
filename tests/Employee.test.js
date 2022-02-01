const Employee = require("../lib/employee");
describe("Employee", () => {
  describe("Class methods", () => {
    it("should return the employee's name when the getName() method is called", () => {
      //ASSIGN
      const name = "Andre";
      const clase = new Employee({ name });
      //ACT
      const actualName = clase.getName();
      // ASSERT
      expect(actualName).toEqual(name);
    });
    it("should return the employee's ID when the getId() method is called", () => {
      //ASSIGN
      const id = "94";
      const clase = new Employee({ id });
      //ACT
      const actualId = clase.getId();
      // ASSERT
      expect(actualId).toEqual(id);
    });
    it("should return the employee's email when the getEmail() method is called", () => {
      //ASSIGN
      const email = "ventaslederer@hotmail.com";
      const clase = new Employee({ email });
      //ACT
      const actualEmail = clase.getEmail();
      // ASSERT
      expect(actualEmail).toEqual(email);
    });
    it("should return 'Employee' when the getRole() method is called", () => {
      //ASSIGN
      const role = "Employee";
      const clase = new Employee({});
      //ACT
      const actualRole = clase.getRole();
      // ASSERT
      expect(actualRole).toEqual(role);
    });
  });
});
