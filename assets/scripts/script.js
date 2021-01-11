let projects = [
  {
    url: "https://kjhallam.github.io/05_work_day_scheduler/",
    imageLink: "./assets/images/scheduler-05-3x2.jpg",
    alt: "scheduler",
    title: "workday scheduler",
    githubLink: "https://github.com/kjhallam/05_work_day_scheduler.git",
    subText: "Click to get code",
    desc: "Schedule each day with ease..."
  },
  {
    url: ""
  }

]

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