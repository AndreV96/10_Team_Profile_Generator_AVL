function createManager(data) {
  const managerData = data.filter((manager) => "Manager" === manager.getRole());
  return `
      <div class="shadow-2xl bg-gray-200">
        <div class="p-4 bg-blue-500 text-white text-2xl px-8">
          <h1>${managerData[0].getName()}</h1>
        <i class="fas fa-mug-hot inline-block"></i>
        <h2 class="inline-block">${managerData[0].getRole()}</h2>
        </div>
        <ul class="m-4 my-6 text-lg leading-20 bg-white" class="p-4">
          <li class="p-4 py-2 border-b-2 border-gray-300">ID: ${managerData[0].getId()}</li>
          <li class="p-4 py-2 border-b-2 border-gray-300">Email: <a class=" text-blue-700 text-bold pointer" href="mailto:${managerData[0].getEmail()}">${managerData[0].getEmail()}</a></li>
          <li class="p-4 py-2 border-b-2 border-gray-300">Office Number: ${managerData[0].getOffice()}</li>
        </ul>
      </div>    
  `;
}
// COTINUE ADDING ICONS FOR ENGINEER AND INTERN AND IN GENERAL FINISH ALL HTML AND CSS CODE
function createEngineer(data) {
  const engineerData = data.filter(
    (engineer) => "Engineer" === engineer.getRole()
  );
  const allEngineersData = [];
  engineerData.forEach((engineer) => {
    const html = `
      <div class=" shadow-2xl bg-gray-200">
        <div class="p-4 bg-blue-500 text-white text-2xl px-8">
          <h1>${engineer.getName()}</h1>
          <i class="fas fa-glasses"></i>
          <h2 class="inline">${engineer.getRole()}</h2>
        </div>
        <ul class="m-4 my-6 text-lg leading-20 bg-white">
          <li class="p-4 py-2 border-b-2 border-gray-300">ID: ${engineer.getId()}</li>
          <li class="p-4 py-2 border-b-2 border-gray-300">Email: <a class=" text-blue-700 text-bold pointer" href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="p-4 py-2 border-b-2 border-gray-300">GitHub: <a class=" text-blue-700 text-bold pointer" href="https://github.com/${engineer.getGithub()}/" target="_blank">/${engineer.getGithub()}</a></li>
        </ul>
      </div>
    `;
    allEngineersData.push(html);
  });
  return allEngineersData.join("");
}

function createIntern(data) {
  const internData = data.filter((intern) => "Intern" === intern.getRole());
  const allinternsData = [];
  internData.forEach((intern) => {
    const html = `
      <div class=" shadow-2xl bg-gray-200">
        <div class="p-4 bg-blue-500 text-white text-2xl px-8">
          <h1>${intern.getName()}</h1>
          <i class="fas fa-user-graduate"></i>
          <h2 class="inline">${intern.getRole()}</h2>
        </div>
        <ul class="m-4 my-6 text-lg leading-20 bg-white">
          <li class="p-4 py-2 border-b-2 border-gray-300">ID: ${intern.getId()}</li>
          <li class="p-4 py-2 border-b-2 border-gray-300">Email: <a class=" text-blue-700 text-bold pointer" href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="p-4 py-2 border-b-2 border-gray-300">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    `;
    allinternsData.push(html);
  });
  return allinternsData.join("");
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
  
    <section id="cardsSection" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-center align-center">
      ${createManager(data)}
      ${createEngineer(data)}
      ${createIntern(data)}
    </section>
    <script src="https://kit.fontawesome.com/9f3d832768.js" crossorigin="anonymous"></script>
  </body>
  </html>`;
}

module.exports = generateHtml;
