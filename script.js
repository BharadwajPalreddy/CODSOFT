
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const portfolioItems = [
    {
        title: 'Calculator',
        description: 'A simple calculator using HTML,CSS,JS',
        link: 'https://github.com/BharadwajPalreddy/CODSOFT.git'
    },
    {
        title: 'Landing Page',
        description: 'Landing Page for a shoe store using HTML,CSS',
        link: 'https://github.com/BharadwajPalreddy/CODSOFT/blob/main/task2.html'
    },
    {
        title: 'Temperature Converter',
        description: 'Simple temperature converter using HTML,CSS,JS',
        link: 'https://github.com/BharadwajPalreddy/OIBSIP/blob/main/task3.html'
    },
    {
        title: 'Resume',
        description: 'This is my resume',
        link: 'file:///C:/Users/palre/Downloads/resume.pdf'
    },
];

const portfolioContainer = document.querySelector('.portfolio-items');

portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');

    portfolioItem.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" target="_blank">View Project</a>
    `;

    portfolioContainer.appendChild(portfolioItem);
});
