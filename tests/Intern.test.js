const Intern = require("../lib/intern");
describe("Intern", () => {
  describe("Class methods", () => {
    it("should return the intern's name when the getName() method is called", () => {
      //ASSIGN
      const name = "Andre";
      const clase = new Intern({ name });
      //ACT
      const actualName = clase.getName();
      // ASSERT
      expect(actualName).toEqual(name);
    });
    it("should return the intern's ID when the getId() method is called", () => {
      //ASSIGN
      const id = "94";
      const clase = new Intern({ id });
      //ACT
      const actualId = clase.getId();
      // ASSERT
      expect(actualId).toEqual(id);
    });
    it("should return the intern's email when the getEmail() method is called", () => {
      //ASSIGN
      const email = "ventaslederer@hotmail.com";
      const clase = new Intern({ email });
      //ACT
      const actualEmail = clase.getEmail();
      // ASSERT
      expect(actualEmail).toEqual(email);
    });
    it("should return 'Intern' when the getRole() method is called", () => {
      //ASSIGN
      const role = "Intern";
      const clase = new Intern({});
      //ACT
      const actualRole = clase.getRole();
      // ASSERT
      expect(actualRole).toEqual(role);
    });
    it("should return the intern's school when the getSchool() method is called", () => {
      //ASSIGN
      const school = "Tec de Monterrey";
      const clase = new Intern({ school });
      //ACT
      const actualSchool = clase.getSchool();
      // ASSERT
      expect(actualSchool).toEqual(school);
    });
  });
});
