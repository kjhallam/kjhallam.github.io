let projects = [
  {
      url: "https://kjhallam.github.io/03_password_generator/",
      imageLink: "./assets/images/password-generator-3x2.jpg",
      alt: "password generator",
      title: "Password Generator",
      githubLink: "https://github.com/kjhallam/03_password_generator.git",
      subText: "Click to view code",
      desc: "Generating a new password each time."
    },
  {
    url: "https://kjhallam.github.io/05_work_day_scheduler/",
    imageLink: "./assets/images/scheduler-05-3x2.jpg",
    alt: "scheduler",
    title: "Workday Scheduler",
    githubLink: "https://github.com/kjhallam/05_work_day_scheduler.git",
    subText: "Click to view code",
    desc: "Schedule each day with ease."
  },
  {
    url: "https://kjhallam.github.io/06_weather_dashboard/",
    imageLink: "./assets/images/weather-dash-06.png",
    alt: "weather dashboard",
    title: "Weather Dashboard",
    githubLink: "https://github.com/kjhallam/06_weather_dashboard.git",
    subText: "Click to view code",
    desc: "Display the current forecast in the area."
  },
{
  url: "https://burger-app-kjh.herokuapp.com/",
  imageLink: "./assets/images/burger-13-3x2.jpg",
  alt: "burger app",
  title: "Burger App",
  githubLink: "https://github.com/kjhallam/13_burger.git",
  subText: "Click to view code",
  desc: "An app that will allow you to order a burger & devour it."
},
{
url: "https://kjhallam.github.io/Project1/",
imageLink: "./assets/images/project-1-3x2(1).jpg",
alt: "Project 1",
title: "Happy Trails - Project 1",
githubLink: "https://github.com/kjhallam/Project1.git",
subText: "Click to view code",
desc: "Enter a zip or city to Display the local trails."
},
{
  url: "https://mkkp-project2.herokuapp.com/",
  imageLink: "./assets/images/project-1-3x2(1).jpg",
  alt: "Project 2",
  title: "TPoops - Project 2",
  githubLink: "https://github.com/kjhallam/P2-tpoops.git",
  subText: "Click to view code",
  desc: "App designed to enter or view toilet paper that is in stock in your area."
},

];
function portfolioCards() {
  for (let i = 0; i < projects.length; i++) {
    let url = projects[i].url;
    let imageLink = projects[i].imageLink;
    let alt = projects[i].alt;
    let title = projects[i].title;
    let githubLink = projects[i].githubLink;
    let subText = projects[i].subText;
    let desc = projects[i].desc;

  $("#cards").append(
    `<div class="col-md-4 col-sm-6 pb-3">
      <div class="card">
        <a href="${url}" target="_blank">
          <img src="${imageLink}" class="card-img-top" alt="${alt}"></a>
        <article class="card-body">
          <h5 class="card-title">${title}</h5>
          <a href="${githubLink}" target="_blank">
          <h6 class="sub-title"> ${subText}</h6></a>
          <p class="card-text">${desc}</p>
        </article>
      </div>
    </div>`
    )
  }
};
portfolioCards();