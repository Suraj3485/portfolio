document.addEventListener("DOMContentLoaded", () => {
    fetch("https://suraj3485.github.io/portfolio/assets/education.json")
        .then((response) => {
            if (!response.ok)
                throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then((data) => {
            // Section title & description
            document.getElementById("education-title").textContent = data.title;
            document.getElementById("education-description").textContent =
                data.description;

            // Items container
            const eduContainer = document.getElementById("education-items");
            eduContainer.innerHTML = "";

            data.items.forEach((item) => {
                const eduDiv = document.createElement("div");
                eduDiv.className = "resume-item";
                eduDiv.innerHTML = `
          <h4>${item.degree}</h4>
          <h5>${item.date}</h5>
          <p><em>${item.institution}</em></p>
          ${
              item.concentration
                  ? `<p>Concentration: ${item.concentration}</p>`
                  : ""
          }
          ${item.coursework ? `<p>Coursework: ${item.coursework}</p>` : ""}
          ${item.description ? `<p>${item.description}</p>` : ""}
          <p>GPA: ${item.gpa}</p>
        `;
                eduContainer.appendChild(eduDiv);
            });
        })
        .catch((error) =>
            console.error("Error loading education data:", error)
        );
});
