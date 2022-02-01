function createManager(data) {
  const managerData = data.filter(manager => ("Manager" === manager.getRole()))
  return `
    <div>
      <h1>${managerData[0].getName()}</h1>
      <i class="fas fa-mug-hot"></i>
      <h2>${managerData[0].getRole()}</h2>
      <ul>
        <li>ID: ${managerData[0].getId()}</li>
        <li>Email: <a href="mailto:${managerData[0].getEmail()}">${managerData[0].getEmail()}</a></li>
        <li>Office Number: ${managerData[0].getOffice()}</li>
      </ul>
    </div>  
  `
}
// COTINUE ADDING ICONS FOR ENGINEER AND INTERN AND IN GENERAL FINISH ALL HTML AND CSS CODE
function createEngineer(data) {
  const engineerData = data.filter(engineer => ("Engineer" === engineer.getRole()))
  const allEngineersData = []
  engineerData.forEach(engineer => {
    const html = `
    <div>
      <h1>${engineer.getName()}</h1>
      <h2>${engineer.getRole()}</h2>
      <ul>
        <li>ID: ${engineer.getId()}</li>
        <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li>GitHub: <a href="https://github.com/${engineer.getGithub()}/" target="_blank">/${engineer.getGithub()}<a></li>
      </ul>
    </div>
    `
    allEngineersData.push(html)
  });
  return allEngineersData.join("")
}

function createIntern(data) {
  const internData = data.filter(intern => ("Intern" === intern.getRole()))
  const allinternsData = []
  internData.forEach(intern => {
    const html = `
    <div>
      <h1>${intern.getName()}</h1>
      <h2>${intern.getRole()}</h2>
      <ul>
        <li>ID: ${intern.getId()}</li>
        <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li>School: ${intern.getSchool()}</li>
      </ul>
    </div>
    `
    allinternsData.push(html)
  });
  return allinternsData.join("")
}

function generateHtml(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <section id="mainHeading" class="bg-red-500 p-12 flex justify-center">
      <h1 class="text-white text-3xl">My Team</h1>
    </section>
  
    <section id="cardsSection" class="grid sm:grid-cols-3">
      ${createManager(data)}
      ${createEngineer(data)}
      ${createIntern(data)}
    </section>
    <script src="https://kit.fontawesome.com/9f3d832768.js" crossorigin="anonymous"></script>
  </body>
  </html>`
}

module.exports = generateHtml