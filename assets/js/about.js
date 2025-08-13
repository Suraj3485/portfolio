document.addEventListener("DOMContentLoaded", () => {
    fetch("https://suraj3485.github.io/portfolio/assets/about.json")
        .then((response) => {
            if (!response.ok)
                throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then((data) => {
            // Header section
            document.getElementById("name").textContent = data.name;
            document.getElementById("typed").setAttribute("data-typed-items", data.typedItems.join(", "));

            // About section
            document.getElementById("summary").textContent = data.summary;
            document.getElementById("profile-image").src = data.profileImage;
            document.getElementById("job-title").textContent = data.jobTitle;
            document.getElementById("intro-text").textContent = data.introText;
            document.getElementById("closing-text").textContent = data.closingText;

            // Personal info
            const personalInfoContainer =
                document.getElementById("personal-info");

            const leftCol = document.createElement("div");
            leftCol.className = "col-lg-6";
            leftCol.innerHTML = `<ul>
                        ${data.personalInfo.left
                            .map(
                                (item) => `
                        <li><i class="bi bi-chevron-right"></i> <strong>${item.label}:</strong> <span>${item.value}</span></li>
                        `
                            )
                            .join("")}
                    </ul>`;

            const rightCol = document.createElement("div");
            rightCol.className = "col-lg-6";
            rightCol.innerHTML = `<ul>
                    ${data.personalInfo.right
                        .map(
                            (item) => `
                    <li><i class="bi bi-chevron-right"></i> <strong>${item.label}:</strong> <span>${item.value}</span></li>
                    `
                        )
                        .join("")}
                </ul>`;

            personalInfoContainer.appendChild(leftCol);
            personalInfoContainer.appendChild(rightCol);
        })
        .catch((error) => console.error("Error loading about data:", error));
});
