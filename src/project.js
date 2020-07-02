const projectList = [];
let projectNum = 0;

function projectListSetup() {
    const projectListDiv = document.getElementById("projects");
    const projectsHeading = document.createElement('h1');
    projectsHeading.setAttribute("id", "project-heading");
    projectsHeading.setAttribute("style", "margin-bottom: 2px; margin-top: 1px;");
    projectsHeading.innerHTML = "Your Projects";
    const projList = document.createElement("section");
    projList.setAttribute("id", "main-proj-list");
    projList.setAttribute("style", "display: flex; flex-direction: row;");
    projectListDiv.setAttribute("style", "margin-top: 15px; padding: 5px; background-color: #ffd65a; border-radius: 10px; border: solid white 0.5px;")
    projectListDiv.appendChild(projectsHeading);
    const addNew = document.createElement("button");
    addNew.setAttribute("style", "border-radius: 2px;")
    addNew.innerHTML = "NEW";
    addNew.addEventListener("click", () => {
        const name = prompt("Enter the name of the project: ");
        addProject(name);
        renderProject();
        console.log(projectList);
    });
    projectListDiv.appendChild(addNew);
    projectListDiv.appendChild(projList);
}

function renderProject() {
    const projectListDiv = document.getElementById("main-proj-list");
    let projectDiv = document.createElement("div");
    projectDiv.setAttribute("id", "project-div");
    projectDiv.setAttribute("style", "border: dashed white 0.5px; margin: 10px;");
    projectDiv.setAttribute("class", "project-div");
    projectDiv.dataset.id = projectList[0].id = ++projectNum;
    let projectTitle = document.createElement("h2");
    projectTitle.setAttribute("style", "text-align: center;")
    projectTitle.innerHTML = projectList[0].name;
    let projectTasks = document.createElement("p");
    projectTasks.innerHTML = projectList[0].tasks;
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectTasks);
    let delProject = document.createElement("button");
    delProject.setAttribute("id", "del-project");
    delProject.innerHTML = "Delete";
    delProject.addEventListener("click", () => {
        for (let i = 0; i < projectList.length; ++i) {
            if (projectList[i].id == projectDiv.dataset.id) {
                projectList.splice(i, 1);
                break;
            }
        }
        projectListDiv.removeChild(projectDiv);
    });
    projectDiv.appendChild(delProject);
    projectListDiv.appendChild(projectDiv);
}

function addProject (name) {
    const project = new Project();
    project.name = name;
    projectList.unshift(project);
}

function Project () {
    this.name = "";
    this.tasks = [];
    this.id = 0;
}

export {projectList, Project, renderProject, projectListSetup, addProject};