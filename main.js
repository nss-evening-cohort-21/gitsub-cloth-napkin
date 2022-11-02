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
  repoName: "Example 1",
  repoDescription: " ",
},

{
  id:2,
  repoName: "my-goals",
  repoDescription: " ",
},

{
  id:3,
  repoName: "Sample My Goals",
  repoDescription: "Goals for the NSS Bootcamp",
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

//Main Page Elements
const filterOnDom = () => {
  const domstring = `
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div id="navbarNav">
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

const projectsOnDom =  () => {
  const domString = ``;
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

const packagesForm = () => {
  let domString = `
  <form id= "newProjectForm">
    <div class="mb-3">
      <label for="projectBoardInput1" class="form-label">Project board name</label>
      <input type="text" class="form-control" id="projectBoardInput1" placeholder="Name here">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </form>
  `
}

//Filter pages and start app
const overviewPage = () => {
  pinnedRepoCardsOnDom(pinnedRepoArray);
  overview.hidden = false;
  repos.hidden = true;
  projects.hidden = true;
  packages.hidden = true;
  console.log('overview')
}

const repositoriesPage = () => {
  repoCardsOnDom(repoArray);
  overview.hidden = true;
  repos.hidden = false;
  projects.hidden = true;
  packages.hidden = true;
}

const projectsPage = () => {
  projectsOnDom(projectsArray);
  overview.hidden = true;
  repos.hidden = true;
  projects.hidden = false;
  packages.hidden = true;
}

const packagesPage = () => {
  packagesOnDom(packagesArray);
  overview.hidden = true;
  repos.hidden = true;
  projects.hidden = true;
  packages.hidden = false;
}

const switchPage = () => {
  const filter = document.querySelector('#filterSelector');
  filter.addEventListener('click', (e) => {
    if (e.target.id.includes('filter--repos')) {
      repositoriesPage();
      console.log('repo clicked');
    } else if (e.target.id.includes('filter--projects')) {
      projectsPage();
    } else if (e.target.id.includes('filter--packages')) {
      packagesPage();
    } else if (e.target.id.includes('filter--overview')) {
      overviewPage();
      console.log('overview clicked');
    }
  })
};

const startApp = () => {
  filterOnDom();
  pinnedRepoCardsOnDom(pinnedRepoArray);
  switchPage();
}
startApp();
