class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
  }
  
  getName()

  getId()

  getEmail() {
    const emailEl = document.createElement("li"); //PSEUDO code
    emailEl.text(this.email) //PSEUDO code
    infoList.append(emailEl) //PSEUDO code

  }

  getRole() {

  }

 }

module.exports = Employee