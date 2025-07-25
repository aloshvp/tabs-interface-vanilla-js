const tabsData = [
    { id: "tab1", title: "Tab 1", content: "This is content for Tab 1" },
    { id: "tab2", title: "Tab 2", content: "This is content for Tab 2" },
    { id: "tab3", title: "Tab 3", content: "This is content for Tab 3" },
    { id: "tab4", title: "Tab 4", content: "This is content for Tab 4" },
    { id: "tab5", title: "Tab 5", content: "This is content for Tab 5" },
];

document.addEventListener("DOMContentLoaded", () => {
    const tabContainer = document.getElementById("tabContainer");
    const contentContainer = document.getElementById("tabContentContainer");

    tabsData.forEach((tab, index) => {
        // Create tab button
        const btn = document.createElement("button");
        btn.textContent = tab.title;
        btn.className = "tab-button";
        if (index === 0) btn.classList.add("active");
        btn.dataset.tab = tab.id;
        tabContainer.appendChild(btn);

        // Create tab content
        const content = document.createElement("div");
        content.id = tab.id;
        content.className = "tab-content";
        if (index !== 0) content.style.display = "none";
        content.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
        contentContainer.appendChild(content);
    });

    tabContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-button")) {
            const targetId = e.target.dataset.tab;

            // Toggle active button
            document.querySelectorAll(".tab-button").forEach((btn) => {
                btn.classList.toggle("active", btn.dataset.tab === targetId);
            });

            // Toggle visible content
            document.querySelectorAll(".tab-content").forEach((content) => {
                content.style.display = content.id === targetId ? "block" : "none";
            });
        }
    });
});
