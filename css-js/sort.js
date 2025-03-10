const sortBy = document.getElementById("sort-by");
const technology = document.getElementById("technology");
const button = document.getElementById("sort-button");
const projectsContainer = document.getElementById("projects-container");
const allProjects = Array.from(projectsContainer.getElementsByClassName('card'));

function sortProjects(projects, criteria) {
    projects.sort((a, b) => {
        const dateA = a.dataset.date;
        const dateB = b.dataset.date;

        if (criteria === "ascending-date") {
            return dateA.localeCompare(dateB);
        }
        else if (criteria === "descending-date") {
            return dateB.localeCompare(dateA);
        }
        return 0;
    });
}

function filterProjects(technology) {
    return allProjects.filter((project) => {
        const technologies = project.dataset.technology.split(',').map(t => t.trim());
        return technology === 'everything' || technologies.includes(technology);
    });
}

function updateDisplay(projects) {
    projectsContainer.innerHTML = "";
    if (projects.length >= 1) {
        projects.forEach((project) => projectsContainer.appendChild(project));
    }
    else {
        const newP = document.createElement('p');
        newP.textContent = "Il n'y a pas encore de projet utilisant cette technologie";
        projectsContainer.appendChild(newP);
    }
}

button.addEventListener("click", () => {
    const selectedCriteria = sortBy.value;
    const selectedTechnology = technology.value;

    let filteredProjects = filterProjects(selectedTechnology);

    sortProjects(filteredProjects, selectedCriteria);
    updateDisplay(filteredProjects);
});