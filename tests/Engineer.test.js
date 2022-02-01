const Engineer = require("../lib/engineer");
describe("Engineer", () => {
  describe("Class methods", () => {
    it("should return the engineer's name when the getName() method is called", () => {
      //ASSIGN
      const name = "Andre";
      const clase = new Engineer({ name });
      //ACT
      const actualName = clase.getName();
      // ASSERT
      expect(actualName).toEqual(name);
    });
    it("should return the engineer's ID when the getId() method is called", () => {
      //ASSIGN
      const id = "94";
      const clase = new Engineer({ id });
      //ACT
      const actualId = clase.getId();
      // ASSERT
      expect(actualId).toEqual(id);
    });
    it("should return the engineer's email when the getEmail() method is called", () => {
      //ASSIGN
      const email = "ventaslederer@hotmail.com";
      const clase = new Engineer({ email });
      //ACT
      const actualEmail = clase.getEmail();
      // ASSERT
      expect(actualEmail).toEqual(email);
    });
    it("should return 'Engineer' when the getRole() method is called", () => {
      //ASSIGN
      const role = "Engineer";
      const clase = new Engineer({});
      //ACT
      const actualRole = clase.getRole();
      // ASSERT
      expect(actualRole).toEqual(role);
    });
    it("should return the engineer's github account when the getGithub() method is called", () => {
      //ASSIGN
      const github = "AndreV96";
      const clase = new Engineer({ github });
      //ACT
      const actualGithub = clase.getGithub();
      // ASSERT
      expect(actualGithub).toEqual(github);
    });
  });
});
