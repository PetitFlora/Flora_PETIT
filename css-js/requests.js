
function displayHardSkills(skills) {
    const container = document.getElementById('skills-list');
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = "skill";
        const img = document.createElement('img');
        img.src = skill.image;
        img.alt = skill.altText;
        img.className = "skill-icon";
        const p = document.createElement('p');
        p.textContent = `${skill.name}`;
        div.appendChild(img);
        div.appendChild(p);
        container.appendChild(div);
    });
}

function displayProjects(projects) {
    const container = document.getElementById('projects-list');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = "card";

        const img = document.createElement('img');
        img.src = "https://placehold.co/600x400";
        img.alt = "placeholder";

        const title = document.createElement('h3');
        title.textContent = `${project.title}`;
        if (project.time != null) { title.textContent += ` | ${project.time}`; }
        if (project.affiliation != null) { title.textContent += ` | ${project.affiliation}`; }

        const technos = document.createElement('h4');
        project.technologies.forEach(techno => {
            if (techno[1] == true) {
                if (technos.textContent != "") { technos.textContent += `, `; }
                technos.textContent += techno[0];
            }
        });

        const h5 = document.createElement('h5');
        if (project.startdate == null) {
            const [year, month] = project.enddate.split("-");
            const date = new Date(year, month - 1); 
            const end = date.toLocaleString("fr-FR", {month: "short", year: "numeric"});
            h5.textContent = end;
        } else if (project.enddate == "today") {
            const [year, month] = project.startdate.split("-");
            const date = new Date(year, month - 1); 
            const start = date.toLocaleString("fr-FR", {month: "short", year: "numeric"});
            h5.textContent = `${start} - aujourd'hui`;
        } else {
            const [syear, smonth] = project.startdate.split("-");
            const [eyear, emonth] = project.enddate.split("-");
            const sdate = new Date(syear, smonth - 1);
            const edate = new Date(eyear, emonth - 1);
            const start = sdate.toLocaleString("fr-FR", {month: "short", year: "numeric"});
            const end = edate.toLocaleString("fr-FR", {month: "short", year: "numeric"});
            h5.textContent = `${start} - ${end}`;
        }

        const p = document.createElement('p');
        p.textContent = project.smalldescription;

        const buttons = document.createElement('div');
        buttons.innerHTML = `<a class="button" href="#">En savoir plus</a>`;
        if (project.link[1] != null) {
            buttons.innerHTML += `<a class="button" href="${project.link[1]}">Voir le ${project.link[0]}</a>`;
        }

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(technos);
        div.appendChild(h5);
        div.appendChild(p);
        div.appendChild(buttons);

        container.appendChild(div);
    });
}