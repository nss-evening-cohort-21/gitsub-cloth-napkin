//Arrays
const pinnedRepoArray = [
{
  id: 1,
  repoName: "harry-potter-sorting-hat",
  description: "This program randomly assigns people into a Harry Potter house. The user can filter between houses or delete a wizard, sending them into Voldemort's army.",
  program: "JavaScript",
  Likes: 10,
  Forks: 2
},
{
  id: 2,
  repoName: "pet-adoption-lab",
  description: "This program allows a user to upload an image and name of a pet and displays the pet on a card. The user can delete a pet once they have found a home.",
  program: "JavaScript",
  Likes: 17,
  Forks: 4
},
{
  id: 3,
  repoName: "business-card",
  description: "This is a web version of my personal business card.",
  program: "JavaScript",
  Likes: 4,
  Forks: 0
},
{
  id: 4,
  repoName: "lab-calculator",
  description: "This project is the visual elements of a calculator.",
  program: "JavaScript",
  Likes: 1,
  Forks: 0
},
{
  id: 5,
  repoName: "product-cards",
  description: "This project displays some Fender guitars listed for sale and contains information on the products.",
  program: "JavaScript",
  Likes: 5,
  Forks: 0
},
{
  id: 6,
  repoName: "link-in-bio",
  description: "This project mimics linktree and contains a picture of me, my contact information, and button links to my social medias.",
  program: "JavaScript",
  Likes: 6,
  Forks: 1
}
]

const repoArray = [
  {
    link: https://github.com/barcher1968/test-repo-18, 
    description: "Description of the link above.", 
    tags:, 
    languages: "JavaScript", 
    likes: 38, 
    shares: , 
    needsHelp: "2 issues needs help", 
    lastUpdated: "Updated 10 days ago", 
    starButton: true, 
    commitHistory:
  },

  { 
    link: https://github.com/barcher1968/test-repo-17, 
    description: "Description of the link above.", 
    tags:, 
    languages: "JavaScript", 
    likes: 38, 
    shares: , 
    needsHelp: "2 issues needs help", 
    lastUpdated: "Updated 10 days ago", 
    starButton: true, 
    commitHistory: 
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

//Arrays on the DOM
const pinnedRepoCardsOnDom = () => {
  const domString = ``;
}

const repoCardsOnDom =  () => {
  const domString = ``;
}

const projectsOnDom =  () => {
  const domString = ``;
}

const packagesOnDom =  () => {
  const domString = ``;
}
