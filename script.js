// Define the regex tutorials
const tutorials = [
    {
        title: "Matching a Hex Value",
        regex: "/^#?([a-f0-9]{6}|[a-f0-9]{3})$/",
        sections: [
            { title: "Introduction", content: "Explanation of matching hex values." },
        ]
    },
    {
        title: "Matching an Email",
        regex: "/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/",
        sections: [
            { title: "Introduction", content: "Explanation of matching email addresses." },
        ]
    },
];

// Function to generate table of contents
function generateTableOfContents() {
    const toc = document.getElementById('toc');
    tutorials.forEach((tutorial, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#tutorial-${index}">${tutorial.title}</a>`;
        toc.appendChild(listItem);
    });
}

// Function to generate tutorial sections
function generateTutorialSections() {
    const main = document.querySelector('main');
    tutorials.forEach((tutorial, index) => {
        const tutorialSection = document.createElement('section');
        tutorialSection.className = 'mx-auto mb-5'
        tutorialSection.id = `tutorial-${index}`;
        const title = document.createElement('h2');
        title.textContent = tutorial.title;
        tutorialSection.appendChild(title);
        tutorial.sections.forEach(section => {
            const sectionHeader = document.createElement('h3');
            sectionHeader.textContent = section.title;
            const sectionContent = document.createElement('p');
            sectionContent.textContent = section.content;
            tutorialSection.appendChild(sectionHeader);
            tutorialSection.appendChild(sectionContent);
        });
        main.appendChild(tutorialSection);
    });
}

// Initialize the application
generateTableOfContents();
generateTutorialSections();
