document.addEventListener("DOMContentLoaded", function () {
    const aboutMeContainer = document.getElementById('render-about-me');
    renderAboutMe(aboutMeContainer);

    const educationContainer = document.getElementById('render-education-data');
    renderEducationData(educationContainer);

    const experienceContainer = document.getElementById('render-experience-data');
    renderExperienceData(experienceContainer);

    const skillsContainer = document.getElementById('render-skills-data');
    renderSkillsData(skillsContainer);

    const socialProfilesHomeContainer = document.getElementById('render-social-profiles-data-home');
    const socialProfilesContactContainer = document.getElementById('render-social-profiles-data-contact');
    renderSocialProfilesData(socialProfilesHomeContainer);
    renderSocialProfilesData(socialProfilesContactContainer);

    const cpProfilesContainer = document.getElementById('render-cp-profiles-data');
    renderCpProfilesData(cpProfilesContainer);
});


function renderAboutMe(container) {
    let html = `<h3 class="glow-text">${ABOUT_ME_DATA.title}</h3>`;

    // Render introduction section
    html += '<ul class="main-info">';
    html += ABOUT_ME_DATA.introduction
        .map(intro => `
        <li>
          <i class="bi bi-chevron-right glow-text"></i>
          <span>${intro}</span>
        </li>`)
        .join('');
    html += '</ul>';

    // Render personal info section
    html += '<div class="row"><hr>';

    html += '<div class="col-lg-6"><ul>';
    ABOUT_ME_DATA.personalInfo.forEach((info, index) => {
        if (index > 0 && index % 2 === 0) {
            html += '</ul></div><div class="col-lg-6"><ul>';
        }
        html += `<li><i class="bi bi-chevron-right glow-text"></i> <strong>${info.label}:</strong> <span>${info.value}</span></li>`;
    });
    html += '</ul></div></div>';

    container.innerHTML = html;
}

function renderEducationData(container) {
    let html = '';

    EDUCATION_DATA.forEach(education => {
        html += `
        <div class="resume-item">
            <h4 class="resume-item-title glow-text">${education.school}</h4>
            <div class="resume-item-subtitle">
                <p><em>${education.degree}</em></p>
                <h5>${education.duration}  |  ${education.location}</h5>
            </div>
            <ul class="resume-item-description">
            ${education.achievements
                .map(achievement => `<li>${achievement}</li>`)
                .join('')
            }
            </ul>
        </div>
        `
    });

    container.innerHTML = html;
}

function renderExperienceData(container) {
    let html = '';

    EXPERIENCE_DATA.forEach(experience => {
        html += `
        <div class="resume-item">
            <h4 class="resume-item-title glow-text">${experience.company}</h4>
            `;

        experience.roles.forEach(exp => {
            html += `
            <div class="resume-item-subtitle">
                <p><em>${exp.role}</em></p>
                <h5>${exp.duration}  |  ${exp.location}</h5>
            </div>
            <ul class="resume-item-description">
                ${exp.responsibilities
                    .map(responsibility => `<li>${responsibility}</li>`)
                    .join('')
                }
            </ul>
            `;
        });

        html += `
        </div>`;
    });

    container.innerHTML = html;
}

function renderSkillsData(container) {
    const midPoint = Math.ceil(SKILLS_DATA.length / 2);
    const leftSkills = SKILLS_DATA.slice(0, midPoint);
    const rightSkills = SKILLS_DATA.slice(midPoint);
    let html = '';

    //Left Column
    html += '<div class="col-lg-6 col-md-6">';
    leftSkills.forEach(skill => {
        html += `
        <div class="progress">
            <span class="skill">${skill.skill} <i class="val">${skill.percentage}%</i></span>
            <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>`;
    });
    html += '</div>';

    // Right Column
    html += '<div class="col-lg-6 col-md-6">';
    rightSkills.forEach(skill => {
        html += `
        <div class="progress">
            <span class="skill">${skill.skill} <i class="val">${skill.percentage}%</i></span>
            <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>`;
    });
    html += '</div>';

    container.innerHTML = html;
}

function renderSocialProfilesData(container) {
    let html = '';

    SOCIAL_PROFILES_DATA.forEach(profile => {
        html += `
        <a href="${profile.link}" class="${profile.class}" target="_blank">
          <i class="bi ${profile.icon}"></i>
        </a>`;
    });

    container.innerHTML = html;
}

function renderCpProfilesData(container) {
    let html = '';

    CP_PROFILES_DATA.forEach(link => {
        html += `<a href="${link.link}" target="_blank">${link.name}</a>`;
    });

    container.innerHTML = html;
}

