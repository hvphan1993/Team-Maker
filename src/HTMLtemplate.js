// create manager card, engineer card, intern card

// manager
const createManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card text-white bg-info h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="fa-regular fa-phone-office"></i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class"officeNumber">Office Number: ${manager.officeNumber}</p>
            </div>
        
        </div>
    </div>
    `;
}

// Engineer
const createEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card text-white bg-success h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="fa-solid fa-gear"></i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        
        </div>
    </div>
    `;
}

// Intern
const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card text-white bg-secondary h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="fa-light fa-square-pen"></i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        
        </div>
    </div>
    `;
};

// push array to page
createHTML = (data) => {
    // cards array
    cardsArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // call manager creation function
        if (role === "Manager") {
            const managerCard = createManager(employee);

            cardsArray.push(managerCard);
        }

        // call engineer creation function
        if (role === "Engineer") {
            const engineerCard = createEngineer(employee);

            cardsArray.push(engineerCard);
        }

        // call intern creation function
        if (role === "Intern") {
            const internCard = createIntern(employee);

            cardsArray.push(internCard);
        }
    }

    // join card strings
    const employeeCards = cardsArray.join('')

    // return to created html page
    const  teamPage = teamProfilePage(employeeCards);
    return teamPage;
}


// create HTML page
const teamProfilePage = function (employeeCards) {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fontawesome.com/search?q=gear&s=solid%2Cbrands" rel="stylesheet">
      <link href="https://fontawesome.com/search?q=gear&c=business" rel="stylesheet">
      <link href="https://fontawesome.com/icons/square-pen?s=light" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>

  <body>
      <header>
          <nav class="navbar" id="nav">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="nav-text">Team Profile Cards</span>
          </nav>
      </header>

      <main>
          <div class="container">
              <div class="row justify-content-center" id=" team-cards">
                 <!-- insert employee team cards here -->
                ${employeeCards}
              </div>
          </div>
      </main>
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>

`;
}

// exports
module.exports = createHTML;