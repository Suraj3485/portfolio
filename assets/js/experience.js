document.addEventListener("DOMContentLoaded", () => {
    fetch("https://suraj3485.github.io/portfolio/assets/experience.json")
        .then((response) => {
            if (!response.ok)
                throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then((data) => {
            // Section title & description
            document.getElementById("experience-title").textContent =
                data.title;
            document.getElementById("experience-description").textContent =
                data.description;

            // Items container
            const expContainer = document.getElementById("experience-items");
            expContainer.innerHTML = "";

            data.items.forEach((item) => {
                const expDiv = document.createElement("div");
                expDiv.className = "resume-item";
                expDiv.innerHTML = `
                    <h4>${item.role}</h4>
                    <h5>${item.date}</h5>
                    <p><em>${item.company}</em></p>
                    <ul>
                        ${item.tasks.map((task) => `<li>${task}</li>`).join("")}
                    </ul>
                `;
                expContainer.appendChild(expDiv);
            });
        })
        .catch((error) =>
            console.error("Error loading experience data:", error)
        );
});
