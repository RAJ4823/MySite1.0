const detailsPage = select('#portfolio-details');
const description = select('#description');
const menuPage = select('#portfolio-menu');
const category = select('#category');
const image = select('#image');
const title = select('#title');
const date = select('#date');
const url = select('#url');

//Display selected portfolio details
function displayDetails(key) {
    detailsPage.style.display = 'block';
    menuPage.style.display = 'none';

    let project = PROJECTS_DATA[key];
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
