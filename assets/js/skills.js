document.addEventListener("DOMContentLoaded", () => {
    fetch("https://suraj3485.github.io/portfolio/assets/skills.json") // relative path
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((skillsData) => {
            const container = document.getElementById("skills-container");

            skillsData.forEach((skill) => {
                const col = document.createElement("div");
                col.className = "col-lg-6 mb-4";

                col.innerHTML = `
                    <div class="skill-card">
                        <h4>${skill.title}</h4>
                        <p>${skill.description}</p>
                    </div>
                    `;

                container.appendChild(col);
            });
        })
        .catch((error) => {
            console.error("Error loading skills data:", error);
        });
});
