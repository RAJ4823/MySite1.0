let countVisit = 0;

//  Easy selector function
const select = (ele, all = false) => {
  ele = ele.trim()
  if (all) return [...document.querySelectorAll(ele)]
  return document.querySelector(ele)
}

// Easy addEventlistener function
const on = (type, ele, listener, all = false) => {
  let element = select(ele, all);
  if (element) {
    if (all) element.forEach(e => e.addEventListener(type, listener));
    else element.addEventListener(type, listener);
  }
}

// scroll to element
const scrollto = (ele) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Mobile nav toggle
on('click', '.mobile-nav-toggle', function (e) {
  select('#navbar').classList.toggle('navbar-mobile')
  this.classList.toggle('bx-menu')
  this.classList.remove('bx-fade-left')
  this.classList.toggle('bx-x')
})

// Scrool with ofset on links with a class name .scrollto
on('click', '#navbar .nav-link', function (e) {
  let section = select(this.hash)
  if (this.hash == '#about') {
    select('#portrait').src = `assets/img/me${countVisit}.png`;
    countVisit = (countVisit + 1) % 3;
  }
  else {
    select('#portrait').src = `assets/img/me${countVisit}.png`;
  }

  if (section) {
    e.preventDefault()

    let navbar = select('#navbar')
    let header = select('#header')
    let sections = select('section', true)
    let navlinks = select('#navbar .nav-link', true)

    navlinks.forEach((item) => {
      item.classList.remove('active')
    })

    this.classList.add('active')

    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile')
      let navbarToggle = select('.mobile-nav-toggle')
      navbarToggle.classList.toggle('bx-menu')
      navbarToggle.classList.remove('bx-fade-left')
      navbarToggle.classList.toggle('bx-x')
    }

    if (this.hash == '#header') {
      header.classList.remove('header-top')
      sections.forEach((item) => {
        item.classList.remove('section-show')
      })
      return;
    }

    if (!header.classList.contains('header-top')) {
      header.classList.add('header-top')
      setTimeout(function () {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')

      }, 350);
    } else {
      sections.forEach((item) => {
        item.classList.remove('section-show')
      })
      section.classList.add('section-show')
    }
    scrollto(this.hash)
  }
}, true)

// Activate sections on load with hash links
window.addEventListener('load', () => {
  if (window.location.hash) {
    let initial_nav = select(window.location.hash)

    if (initial_nav) {
      let header = select('#header')
      let navlinks = select('#navbar .nav-link', true)

      header.classList.add('header-top')

      navlinks.forEach((item) => {
        if (item.getAttribute('href') == window.location.hash) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })

      setTimeout(function () {
        initial_nav.classList.add('section-show')
      }, 350);

      scrollto(window.location.hash)
    }
  }
});

//  Skills animation
let skilsContent = select('.skills-content');
if (skilsContent) {
  new Waypoint({
    element: skilsContent,
    offset: '80%',
    handler: function (direction) {
      let progress = select('.progress .progress-bar', true);
      progress.forEach((ele) => {
        ele.style.width = ele.getAttribute('aria-valuenow') + '%'
      });
    }
  })
}

// Initiate Pure Counter 
new PureCounter();

