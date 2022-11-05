//Arrays
const pinnedRepoArray = [
{
  id: 1,
  name: "harry-potter-sorting-hat",
  description: "This program randomly assigns people into a Harry Potter house. The user can filter between houses or delete a wizard, sending them into Voldemort's army.",
  program: "JavaScript",
  Likes: 10,
  Forks: 2
},
{
  id: 2,
  name: "pet-adoption-lab",
  description: "This program allows a user to upload an image and name of a pet and displays the pet on a card. The user can delete a pet once they have found a home.",
  program: "JavaScript",
  Likes: 17,
  Forks: 4
},
{
  id: 3,
  name: "business-card",
  description: "This is a web version of my personal business card.",
  program: "JavaScript",
  Likes: 4,
  Forks: 0
},
{
  id: 4,
  name: "lab-calculator",
  description: "This project is the visual elements of a calculator.",
  program: "JavaScript",
  Likes: 1,
  Forks: 0
},
{
  id: 5,
  name: "product-cards",
  description: "This project displays some Fender guitars listed for sale and contains information on the products.",
  program: "JavaScript",
  Likes: 5,
  Forks: 0
},
{
  id: 6,
  name: "link-in-bio",
  description: "This project mimics linktree and contains a picture of me, my contact information, and button links to my social medias.",
  program: "JavaScript",
  Likes: 6,
  Forks: 1
}
]

const repoArray = [
  {
    link: "https://github.com/barcher1968/test-repo-18", 
    description: "Description of the link above.", 
    tags: ``, 
    languages: "JavaScript", 
    likes: 38, 
    shares: ``, 
    needsHelp: "2 issues needs help", 
    lastUpdated: "Updated 10 days ago", 
    starButton: true, 
    commitHistory: ``
  },

  { 
    link: "https://github.com/barcher1968/test-repo-17", 
    description: "Description of the link above.", 
    tags: ``, 
    languages: "JavaScript", 
    likes: 38, 
    shares: ``, 
    needsHelp: "2 issues needs help", 
    lastUpdated: "Updated 10 days ago", 
    starButton: true, 
    commitHistory: ``
  }
]

const projectsArray = [

{
  id:1,
  name: "Example 1",
  description: "No description",
},

{
  id:2,
  name: "my-goals",
  description: "No description",
},

{
  id:3,
  name: "Sample My Goals",
  description: "Goals for the NSS Bootcamp",
}

]

const packagesArray = [
//James takes this one
  {
    id: 1,
    cardName: "name1",
    description: "this is a description",
  },
  {
    id: 2,
    cardName: "name2",
    description: "this is another description",
  },
  {
    id: 3,
    cardName: "name3",
    description: "this is a third description",
  },
  {
    id: 4,
    cardName: "name4",
    description: "this is a fourth description",
  },
  {
    id: 5,
    cardName: "name5",
    description: "this is a fifth description",
  },
  {
    id: 6,
    cardName: "name6",
    description: "this is a sixth description",
  }
];



//RENDER TO DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

//Query Select
const overview = document.querySelector('#pinnedReposSelector');
const repos = document.querySelector('#repoSelectorArea'); 
const projects = document.querySelector('#projectsSelector');
const packages = document.querySelector('#packagesSelector');
const overviewForm = document.querySelector('#pinnedReposFormSelector');
const reposForm = document.querySelector('#reposFormSelector'); 
const projectsForm = document.querySelector('#projectsFormSelector');
const packagesForm = document.querySelector('#packagesFormSelector');

//Main Page Elements
const filterOnDom = () => {
  const domstring = `
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a id="filter--overview" class="nav-link active" aria-current="page" href="#">Overview</a>
            </li>
            <li class="nav-item">
              <a id="filter--repos" class="nav-link active" aria-current="page" href="#">Repositories</a>
            </li>
            <li class="nav-item">
              <a id="filter--projects" class="nav-link active" aria-current="page" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a id="filter--packages"class="nav-link active" aria-current="page" href="#">Packages</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
  renderToDom('#filterSelector', domstring);
}

//Profile on the DOM

const profileOnDom = () => {
  console.log("Profile on DOM");
  let domString = `
  <div class="card" style="width: 18rem;">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>

  <div class="card-body">
    <h5 class="card-title">Danny Villalobos</h5>
      <p>crican1</p>
    <p class="card-text">Originally from Costa Rica but living in Nashville now. Looking to become a proficient developer and a valuable team player.</p>
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><button type="button" class="btn btn-outline-dark">Follow</button>  <button type="button" class="btn btn-outline-dark"><i class="fa-regular fa-heart"></i>Sponsor</button>  <button type="button" class="btn btn-outline-dark">...</button>

    </li>
    <li class="list-group-item"><i class="fa-solid fa-user-group"></i> 1 follower
      <i class="fas fa-users"></i> 0 following<br>
      <i class="fa-regular fa-star"></i> 5 favorites
    </li>
    <li class="list-group-item">
      <i class="fas fa-map-marker-alt"></i></i> Nashville, TN<br>
      <i class="fa-solid fa-envelope"></i> asd@gmail.com<br>
      <i class="fa-solid fa-link"></i> https://github.com/crican1<br>
      <i class="fa-brands fa-instagram"></i> _claudio.villalobos_
    </li>
    <li class="list-group-item">
      <h2>Highlights</h2>
      <i class="fa-regular fa-star"></i>"Highlight 1"<br>
      <i class="fa-regular fa-star"></i>"Highlight 2"<br>
      <i class="fa-regular fa-star"></i>"Highlight 3"
    </li>
    <li class="list-group-item">
       <h2>Organizations</h2>
       <i class="fas fa-sitemap"></i></i> "Highlight 1"
       <i class="fas fa-sitemap"></i></i> "Highlight 2"
    </li>
  </ul>
   <div class="card-body">
    <h3>Supporters</h3>
    <i class="fa-solid fa-people-group"></i> "Highlight 1"<br>
    <i class="fa-solid fa-people-group"></i> "Highlight 2"<br>
    <i class="fa-solid fa-people-group"></i> "Highlight 3"
   </div>
  </div>
`;
  renderToDom('#profileAreaSelector', domString);
}


//Arrays on the DOM

const pinnedRepoCardsOnDom = (array) => {
  let domString = ``;
  array.forEach((repo) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${repo.name}</h5>
          <p class="card-text">${repo.description}</p>
        </div>
      </div>
    `
  });
  renderToDom('#pinnedReposSelector', domString);
}
//This is to build the repos card to show when the Repositories button is pushed
const repoCardsOnDom = (array) => {
  let domString = ``;
  array.forEach((repo) => {
    domString += `
  <div class="card" style="width: 35rem;">
    <div class="card-body">
      <h5 class="card-title">${repo.link}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${repo.description}</h6>
      <p class="card-text">${repo.description}</p>
      <a href="#" class="card-text">${repo.likes}</a>
      <a href="#" class="card-text">${repo.needsHelp}</a>
      <a href="#" class="card-text">${repo.lastUpdated}</a>
    </div>
  </div>
  `
});
  renderToDom('#reposSelector', domString);
}

const projectsOnDom =  (array) => {


  let domString = ``;
  array.forEach((repo) => {
    domString += 
    `<div class="hstack gap-3 card-body">
  
          <h3>${repo.name}</h3>
          <div class="card-text">${repo.description}</div>
    </div>
    <div>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>`

  });
  renderToDom('#projectsSelector', domString);

}

const packagesOnDom = (array) => {
  let domString = ``;
  array.forEach((repo) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${repo.cardName}</h5>
          <p class="card-text">${repo.description}</p>
          <a href="#" class="btn btn-primary" type="submit">Learn More</a>
        </div>
      </div>
    `
  });
  renderToDom('#packagesSelector', domString);
}

//Function that produces the Pinned Repos form on the DOM
const pinnedReposFormFunction = () => {
  let domString = `
  <form id= "newPackagesForm">
    <div class="mb-3">
      <label for="packagesBoardInput1" class="form-label">Packages board name</label>
      <input type="text" class="form-control" id="packageCardNameInput" placeholder="Packages name here">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"></label>
      <textarea class="form-control" id="packageDescriptionInput" placeholder="Description here" rows="3"></textarea>
    </div>
    <div>
      <button type="submit" class="btn btn-primary mb-3">Create Package</button>
    </div>
  </form>
  `;
  renderToDom('#packagesFormSelector', domString);
}
//Function that takes the user data and enters it into the New Pinned Repos Array
const newPinnedRepo = (event) => {
  event.preventDefault();
  const newPackageObj = {
    id: packagesArray.length + 1,
    cardName: document.querySelector("#packageCardNameInput").value,
    description: document.querySelector("#packageDescriptionInput").value,
  }
  packagesArray.push(newPackageObj);
  packagesOnDom(packagesArray);
  document.querySelector('#newPackagesForm').reset();
}
packagesForm.addEventListener('submit', newPinnedRepo)

//Function that produces the Repos form on the DOM when the Repositories button is pushed
const reposFormFunction = () => {
  let domString = `
  <form id = "reposForm">
      <label for="packagesBoardInput1" class="form-label">New Repository</label>
      <input type="text" class="form-control" id="repoCardNameInput" placeholder="Repo name here">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Description</label>
      <textarea class="form-control" id="repoDescriptionInput" placeholder="Description here" rows="3"></textarea>
    </div>
    <div>
      <button type="submit" class="btn btn-primary mb-3">Create New Repository</button>
    </div>
  </form> 
  `;
  renderToDom('#reposFormSelector', domString);
}

//Function that takes the user data and enters it into the Repos Array
const newRepo = (event) => {
  event.preventDefault();
  const newRepoObj = {
    id: repoArray.length + 1,
    link: document.querySelector("#repoCardNameInput").value,
    description: document.querySelector("#repoDescriptionInput").value,
  }
  repoArray.push(newRepoObj);
  repoCardsOnDom(repoArray);
  document.querySelector('#reposFormSelector').reset();
}
reposForm.addEventListener('submit', newRepo)


//Function that produces the Projects form on the DOM
const projectsFormFunction = () => {
  let domString = `
  <form id= "newProjectForm">
    <div class="mb-3">
      <label for="projectCardNameInput" class="form-label">Project board name</label>
      <input type="text" class="form-control" id="projectCardNameInput" placeholder="Example 2">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"></label>
      <textarea class="form-control" id="projectDescriptionInput" placeholder="Description here" rows="3"></textarea>
    </div>
    <div>
      <button type="submit" class="btn btn-primary mb-3">Create Project</button>
    </div>
  </form>
  `;
  renderToDom('#projectsFormSelector', domString);
}
//Function that takes the user data and enters it into the Projects Array
const newProject = (event) => {
  event.preventDefault();
  const newProjectObj = {
    id: projectsArray.length + 1,
    name: document.querySelector("#projectCardNameInput").value,
    description: document.querySelector("#projectDescriptionInput").value,
  }
  projectsArray.push(newProjectObj);
  projectsOnDom(projectsArray);
  document.querySelector('#newProjectForm').reset();
}
projectsForm.addEventListener('submit', newProject)

const projectSearchFunction = () =>
{
  let domString =
  `<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search all projects" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
  </div>`;
  renderToDom('#projectSearchBar', domString)
}

//Function that produces the Packages form on the DOM
const packagesFormFunction = () => {
  let domString = `
  <form id= "newPackagesForm">
    <div class="mb-3">
      <label for="packagesBoardInput1" class="form-label">Packages board name</label>
      <input type="text" class="form-control" id="packageCardNameInput" placeholder="Packages name here">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"></label>
      <textarea class="form-control" id="packageDescriptionInput" placeholder="Description here" rows="3"></textarea>
    </div>
    <div>
      <button type="submit" class="btn btn-primary mb-3">Create Package</button>
    </div>
  </form>
  `;
  renderToDom('#packagesFormSelector', domString);
}

//Function that takes the user data and enters it into the Packages Array
const newPackage = (event) => {
  event.preventDefault();
  const newPackageObj = {
    id: packagesArray.length + 1,
    cardName: document.querySelector("#packageCardNameInput").value,
    description: document.querySelector("#packageDescriptionInput").value,
  }
  packagesArray.push(newPackageObj);
  packagesOnDom(packagesArray);
  document.querySelector('#newPackagesForm').reset();
}
packagesForm.addEventListener('submit', newPackage)

const footerBootstrap = () => {
  let domString = `
  <div class="card text-center">
  <div class="card-footer">
    <ul class="nav nav-tabs card-footer-tabs">
      <li class="nav-item">
        <a class="nav-link" href="#">Terms</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Privacy</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Security</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Status</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Help</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Github</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">API</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Training</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
  </div>
  `;
  renderToDom('#footerArea', domString);
}

//Filter pages and start app
const overviewPage = () => {
  pinnedRepoCardsOnDom(pinnedRepoArray);
  pinnedReposFormFunction();
  overview.hidden = false;
  repos.hidden = true;
  projects.hidden = true;
  packages.hidden = true;
  overviewForm.hidden = false;
  reposForm.hidden = true;
  projectsForm.hidden = true;
  packagesForm.hidden = true; 
  projectSeach.hidden = true;
}

const repositoriesPage = () => {
  // reposSearchFunction();
  repoCardsOnDom(repoArray);
  reposFormFunction();
  overview.hidden = true;
  repos.hidden = false;
  projects.hidden = true;
  packages.hidden = true;
  overviewForm.hidden = true;
  reposForm.hidden = false;
  projectsForm.hidden = true;
  packagesForm.hidden = true; 
}

const projectsPage = () => {
  projectSearchFunction();
   projectsOnDom(projectsArray);
   projectsFormFunction();
  overview.hidden = true;
  repos.hidden = true;
  projects.hidden = false;
  packages.hidden = true;
  overviewForm.hidden = true;
  reposForm.hidden = true;
  projectsForm.hidden = false;
  packagesForm.hidden = true; 
}

const packagesPage = () => {
  packagesOnDom(packagesArray);
  packagesFormFunction();
  overview.hidden = true;
  repos.hidden = true;
  projects.hidden = true;
  packages.hidden = false;
  overviewForm.hidden = true;
  reposForm.hidden = true;
  projectsForm.hidden = true;
  packagesForm.hidden = false; 
}

const switchPage = () => {
  const filter = document.querySelector('#filterSelector');
  filter.addEventListener('click', (e) => {
    if (e.target.id.includes('filter--repos')) {
      repositoriesPage();
    } else if (e.target.id.includes('filter--projects')) {
      projectsPage();
    } else if (e.target.id.includes('filter--packages')) {
      packagesPage();
    } else if (e.target.id.includes('filter--overview')) {
      overviewPage();
    }
  })
};

const startApp = () => {
  profileOnDom();
  filterOnDom();
  profileOnDom();
  pinnedRepoCardsOnDom(pinnedRepoArray);
  switchPage();
  footerBootstrap();
}
startApp(); 
 