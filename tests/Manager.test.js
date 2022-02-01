const Manager = require("../lib/manager");
describe("Manager", () => {
  describe("Class methods", () => {
    it("should return the manager's name when the getName() method is called", () => {
      //ASSIGN
      const name = "Andre";
      const clase = new Manager({ name });
      //ACT
      const actualName = clase.getName();
      // ASSERT
      expect(actualName).toEqual(name);
    });
    it("should return the manager's ID when the getId() method is called", () => {
      //ASSIGN
      const id = "94";
      const clase = new Manager({ id });
      //ACT
      const actualId = clase.getId();
      // ASSERT
      expect(actualId).toEqual(id);
    });
    it("should return the manager's email when the getEmail() method is called", () => {
      //ASSIGN
      const email = "ventaslederer@hotmail.com";
      const clase = new Manager({ email });
      //ACT
      const actualEmail = clase.getEmail();
      // ASSERT
      expect(actualEmail).toEqual(email);
    });
    it("should return 'Manager' when the getRole() method is called", () => {
      //ASSIGN
      const role = "Manager";
      const clase = new Manager({});
      //ACT
      const actualRole = clase.getRole();
      // ASSERT
      expect(actualRole).toEqual(role);
    });
    it("should return the manager's office number when the getOffice() method is called", () => {
      //ASSIGN
      const office = "221";
      const clase = new Manager({ office });
      //ACT
      const actualOffice = clase.getOffice();
      // ASSERT
      expect(actualOffice).toEqual(office);
    });
  });
});
