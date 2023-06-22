const detailsPage = select('#portfolio-details');
const description = select('#description');
const menuPage = select('#portfolio-menu');
const category = select('#category');
const image = select('#image');
const title = select('#title');
const date = select('#date');
const url = select('#url');

//Object of portfolio details
const data = {
    'super-notes': {
        title: 'SuperNotes',
        category: 'Website, Bootstrap, Design',
        date: 'August 2022',
        url: 'https://raj4823.github.io/SuperNotes/',
        description: 'SuperNotes allows you to manage your notes. You can add, delete, edit or can search the notes. It has incredible 5 themes with light mode and dark mode.',
    },
    'super-calculator': {
        title: 'SuperCalculator',
        category: 'Website, Design',
        date: 'Jan 2022',
        url: 'https://raj4823.github.io/SuperCalculator/',
        description: 'Simple calculator made with HTML, CSS & JS. It has color-changing background which looks awsome.',
    },
    'super-snake': {
        title: 'SuperSnake',
        category: 'Game, Javascript',
        date: 'Jun 2023',
        url: 'https://raj4823.github.io/SuperSnake/',
        description: "SuperSnake is an engaging and addictive snake game that offers captivating game environment where players can control the snake's movement using their mouse/touchpad. With visually appealing graphics, smooth controls, and immersive audio, SuperSnake delivers an enjoyable and challenging gaming experience.",

    },
    'nmhp': {
        title: 'NMHP',
        category: 'UI',
        date: 'Mar 2022',
        url: 'https://www.figma.com/file/HOvm8hBwc6MAUnzIxJSOsK/SIH?node-id=0:1',
        description: 'NMHP means National Medical & Health Portal. It is a SIH 2022 project. Our main aim was to reduce exploitations happening in the hospitals with the help of website. This UI describes the working of our website.',
    },
    'student-portfolio': {
        title: 'Student Portfolio',
        category: 'UI',
        date: 'Jun 2022',
        url: 'https://www.figma.com/file/ws2Hms5tuk4PgdJ5giPTdF/Student-Portfolio?node-id=0%3A1',
        description: 'Student Portfolio UI made on FIGMA. It contains both desktop view and mobile view.',
    },
    'weather-site': {
        title: 'Weather Site',
        category: 'React, API',
        date: 'Feb 2023',
        url: 'https://raj4823.github.io/WeatherSite',
        description: 'You can get up-to-date, accurate weather information with a 48-hour forecast for any city using WeatherSite. It has a slick, modern design, a lovely user interface, and dynamic backgrounds that change depending on the weather.',
    },
    'email-phone-extractor': {
        title: 'Email & Phone Extractor',
        category: 'Chrome Extenstion',
        date: 'Sep 2022',
        url: 'https://github.com/RAJ4823/Email-and-Phone-Number-Extractor',
        description: 'It is a chrome Extension for extracting all Emails and Phone Numbers from a web page. You can download it as .txt or .csv file.',
    },
    'my-site': {
        title: 'My Site',
        category: 'Portfolio Site, Bootstrap, Design',
        date: 'Oct 2022',
        url: 'https://github.com/RAJ4823/MySite',
        description: 'You can see how good it is, but for details it is a bootstrap based portfolio website of mine. It consists a great UI and design. It is a fully responsive website. Current version is 2.0\n\nThis is an easter egg and you found it. 🥳',
    },
    'notesnap': {
        title: 'NoteSnap',
        category: 'Chrome Extension',
        date: 'Jan 2023',
        url: 'https://github.com/RAJ4823/NoteSnap',
        description: "It is a Chrome Extension for taking note of important details on any website. You can quickly highlight and save any text with just one click. You can also copy, delete or download notes. With NoteSnap, you'll never lose important information again.",
    }
}

//Display selected portfolio details
function displayDetails(key) {
    detailsPage.style.display = 'block';
    menuPage.style.display = 'none';

    let project = data[key];
    title.innerText = project.title;
    category.innerText = project.category;
    date.innerText = project.date;
    url.href = project.url;
    image.src = `assets/img/portfolio/${key}.jpg`
    description.innerText = project.description;
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Closes the portfolio details and open main portfolio section page
function closeDetails() {
    detailsPage.style.display = 'none';
    menuPage.style.display = 'block';
}

// Activate listener on window load
window.addEventListener('load', () => {
    let portfolioFilters = select('#portfolio-filters li', true);
    let selectedFilter = '*';
    filterPortfolios(selectedFilter);

    on('click', '#portfolio-filters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach((ele) => ele.classList.remove('filter-active'));
        this.classList.add('filter-active');

        filterPortfolios(this.getAttribute('data-filter'));
    }, true);
});

//Filter selected portfolios
function filterPortfolios(selectedFilter) {
    let portfolios = select('.portfolio-item', true);
    portfolios.forEach((ele) => {
        ele.style.transition = '1s';
        if (ele.classList.contains(selectedFilter) || selectedFilter == '*') {
            ele.classList.add('filter-show');
        }
        else {
            ele.classList.remove('filter-show');
        }
    });
}

// Initiate portfolio lightbox 
const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
});
