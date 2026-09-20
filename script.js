const projects = [
    {
        title: "Portfolio Landing Page",
        category: "Web Design",
        description: "A personal portfolio website created to showcase my skills, projects, and experience."
    },
    {
        title: "Web Development Project",
        category: "Web Development",
        description: "A website project focused on HTML structure, CSS styling, and responsive design."
    },
    {
        title: "Cybersecurity Project",
        category: "Cybersecurity",
        description: "A school project focused on learning cybersecurity concepts and safe security practices."
    },
    {
        title: "Personal Website",
        category: "Web Development",
        description: "A personal website designed to practice creating modern layouts and interactive web pages."
    }
];


function filterProjects(searchValue) {
    const search = searchValue.trim().toLowerCase();

    if (search === "") {
        return [];
    }

    return projects.filter(function(project) {
        return (
            project.title.toLowerCase().includes(search) ||
            project.category.toLowerCase().includes(search) ||
            project.description.toLowerCase().includes(search)
        );
    });
}


function drawProjects(projectList) {
    const container = document.querySelector("#project-list");

    container.innerHTML = "";

    if (projectList.length === 0) {
        container.innerHTML = `
            <p>No projects found. Try another keyword.</p>
        `;
        return;
    }

    projectList.forEach(function(project) {
        const article = document.createElement("article");

        article.innerHTML = `
            <h3>${project.title}</h3>
            <p><strong>${project.category}</strong></p>
            <p>${project.description}</p>
        `;

        container.appendChild(article);
    });
}


const searchInput = document.querySelector("#project-search");

searchInput.addEventListener("input", function() {
    const searchValue = searchInput.value;

    if (searchValue.trim() === "") {
        const container = document.querySelector("#project-list");

        container.innerHTML = `
            <p>Type a keyword above to search my projects.</p>
        `;

        return;
    }

    const filteredProjects = filterProjects(searchValue);

    drawProjects(filteredProjects);
});

drawProjects(projects);

