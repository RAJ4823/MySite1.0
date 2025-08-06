const ABOUT_ME_DATA = {
  title: 'Hello...',
  introduction: [
    "I'm a passionate Software Developer and Technical Lead with hands-on experience in backend systems, AWS, and Chrome extensions.",
    "Known for delivering high-impact features, scaling products to 100K+ users, and leading teams, I take complete ownership and thrive on solving real-world problems with clean, scalable solutions.",
    "With a track record of developing impressive websites and successfully solving over 1500 competitive problems on platforms like Codechef, LeetCode, and Codeforces, I have honed my skills and gained valuable experience over the years.",
    "I'm a team player who adapts quickly and contributes positively to the work environment.",
  ],
  personalInfo: [
    { label: "Birthday", value: "4th August, 2003" },
    { label: "City", value: "Mansa, Gandhinagar, Gujarat" },
    { label: "Phone", value: "+91 91040 94691" },
    { label: "Email", value: "halpaniraj.hr4823@gmail.com" }
  ]
};

const EDUCATION_DATA = [
  {
    school: "LD College of Engineering",
    degree: "Bachelor of Engineering · Information Technology",
    duration: "2020 - 2024",
    location: 'Ahmedabad',
    achievements: [
      "Grade: 9.54 CGPA",
      "Ranked as the top performer with 9.51 CPI",
      "Honored with the Certificate of Excellence for being Top Ranker in both 3rd and 4th year by Dewang Mehta IT Award. ",
    ],
  },
  {
    school: "Ved International School",
    degree: "High School · Science",
    duration: "2018 - 2020",
    location: 'Gandhinagar',
    achievements: [
      "Percentage: 83.54%",
      "Topped school with 98.43 PR and A2 Grade.",
      "Secured impressive ACPC rank of 862 in Gujarat.",
    ],
  },
  {
    school: "R.D.S.H. School",
    degree: "Secondary School",
    duration: "2017 - 2018",
    location: "Mansa",
    achievements: [
      "Percentage: 89.33%",
      "Topped school with 98.96 PR and A2 Grade.",
    ],
  },
];

const EXPERIENCE_DATA = [
  {
    company: "Accumn - A Yubi Company",
    roles: [
      {
        role: "Associate Software Engineer",
        duration: "Jun, 2024 - Present",
        location: "Ahmedabad",
        responsibilities: [
          "Owned and delivered high-quality features with strong accountability. Played a key role in team success.",
          "Mentored and assisted teammates — including senior engineers — with debugging and implementation.",
          "Actively working with Java, Spring Boot, Kafka, HtmlUnit (crawling), and AWS (EC2, S3, Lambda)",
        ]
      },
      {
        role: "Software Engineer Intern",
        duration: "Mar, 2024 - May, 2024",
        location: "Ahmedabad",
        responsibilities: [
          "Gained hands-on experience in Java, Spring Boot, MySQL, and backend architecture.",
          "Joined the “Crawling-Team” and started developing web crawlers using HtmlUnit."
        ]
      }
    ]
  }
];

const SKILLS_DATA = [
  { skill: "Front-end Web Development", percentage: 95 },
  { skill: "Full-stack Web Development", percentage: 75 },
  { skill: "AWS [EC2, S3, Lambda, RDS, DynamoDB]", percentage: 85 },
  { skill: "UI/UX & Design", percentage: 70 },
  { skill: "Figma & Canva", percentage: 90 },
  { skill: "Web-Extension Development", percentage: 95 },
  { skill: "DSA", percentage: 90 },
  { skill: "Java", percentage: 70 },
  { skill: "C++", percentage: 80 },
  { skill: "Git & Github", percentage: 90 },
];

const CP_ACHIEVEMENTS_DATA = [
  {
    name: "Google Kickstart",
    link: "https://drive.google.com/file/d/1ZDt93O13WuHepx168-SLIo9szDyw4SBQ/view?usp=share_link",
    title: "View Certificate",
    rank: 1144,
    description: "Global Rank",
    color: "#1ffa61"
  },
  {
    name: "Codechef Rating",
    link: "https://www.codechef.com/users/the_247",
    title: "Visit Profile",
    rank: 1937,
    description: "4 ⭐",
    color: "#c800ff"
  },
  {
    name: "Codeforces Rating",
    link: "https://codeforces.com/profile/the_247",
    title: "Visit Profile",
    rank: 1419,
    description: "Specialist",
    color: "#00ffee"
  },
  {
    name: "LeetCode Rating",
    link: "https://leetcode.com/the_247",
    title: "Visit Profile",
    rank: 1863,
    description: "Knight",
    color: "#ffa116"
  }
];

const SOCIAL_PROFILES_DATA = [
  {
    name: "Twitter",
    link: "https://twitter.com/RAJ4823",
    icon: "bi-twitter-x",
    class: "twitter"
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100013725934297",
    icon: "bi-facebook",
    class: "facebook"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/raj._.4/",
    icon: "bi-instagram",
    class: "instagram"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/RAJ4823/",
    icon: "bi-linkedin",
    class: "linkedin"
  },
  {
    name: "GitHub",
    link: "https://github.com/RAJ4823",
    icon: "bi-github",
    class: "github"
  }
];

const CP_PROFILES_DATA = [
  {
    name: "LeetCode",
    link: "https://leetcode.com/the_247"
  },
  {
    name: "Codechef",
    link: "https://www.codechef.com/users/the_247"
  },
  {
    name: "Codeforce",
    link: "https://codeforces.com/profile/the_247"
  },
  {
    name: "HackerRank",
    link: "https://www.hackerrank.com/the_247"
  },
  {
    name: "CodingNinjas",
    link: "https://www.codingninjas.com/studio/profile/the_247"
  }
];


const PROJECTS_DATA = {
  'login-system': {
    title: 'Login System',
    category: 'MERN Stack',
    date: 'Oct 2023',
    url: 'https://login-system-raj4823.onrender.com/',
    shortDescription: 'MERN Stack based Complete Login System',
    description: 'A MERN stack-based login system with user registration, secure authentication, profile management, password recovery with OTP, and email notifications, and more.',
    filter: ['react', 'superverse']
  },
  'weather-site': {
    title: 'Weather Site',
    category: 'React, API',
    date: 'Feb 2023',
    url: 'https://raj4823.github.io/WeatherSite',
    shortDescription: 'Gives weather info of any city',
    description: 'You can get up-to-date, accurate weather information with a 48-hour forecast for any city using WeatherSite. It has a slick, modern design, a lovely user interface, and dynamic backgrounds that change depending on the weather.',
    filter: ['react', 'superverse']
  },
  'super-snake': {
    title: 'SuperSnake',
    category: 'Game, Javascript',
    date: 'Jun 2023',
    url: 'https://raj4823.github.io/SuperSnake/',
    shortDescription: 'The ultimate mouse-controlled snake game',
    description: "SuperSnake is an engaging and addictive snake game that offers captivating game environment where players can control the snake's movement using their mouse/touchpad. With visually appealing graphics, smooth controls, and immersive audio, SuperSnake delivers an enjoyable and challenging gaming experience.",
    filter: ['bootstrap', 'superverse']
  },
  'notesnap': {
    title: 'NoteSnap',
    category: 'Chrome Extension',
    date: 'Jan 2023',
    url: 'https://github.com/RAJ4823/NoteSnap',
    shortDescription: 'Note-Taking Chrome Extenstion',
    description: "It is a Chrome Extension for taking note of important details on any website. You can quickly highlight and save any text with just one click. You can also copy, delete or download notes. With NoteSnap, you'll never lose important information again.",
    filter: ['extension']
  },
  'super-notes': {
    title: 'SuperNotes',
    category: 'Website, Bootstrap, Design',
    date: 'August 2022',
    url: 'https://raj4823.github.io/SuperNotes/',
    shortDescription: 'Note-Taking Website',
    description: 'SuperNotes allows you to manage your notes. You can add, delete, edit or can search the notes. It has incredible 5 themes with light mode and dark mode.',
    filter: ['bootstrap', 'superverse']
  },
  'my-site': {
    title: 'My Site',
    category: 'Portfolio Site, Bootstrap, Design',
    date: 'Oct 2022',
    url: 'https://github.com/RAJ4823/MySite',
    shortDescription: 'My Portfolio Website',
    description: 'You can see how good it is, but for details it is a bootstrap based portfolio website of mine. It consists a great UI and design. It is a fully responsive website. Current version is 2.0\n\nThis is an easter egg and you found it. 🥳',
    filter: ['bootstrap', 'superverse']
  },
  'super-calculator': {
    title: 'SuperCalculator',
    category: 'Website, Design',
    date: 'Jan 2022',
    url: 'https://raj4823.github.io/SuperCalculator/',
    shortDescription: 'A calculator with fantastic design',
    description: 'Simple calculator made with HTML, CSS & JS. It has color-changing background which looks awsome.',
    filter: ['bootstrap', 'superverse']
  },
  'nmhp': {
    title: 'NMHP',
    category: 'UI',
    date: 'Mar 2022',
    url: 'https://www.figma.com/file/HOvm8hBwc6MAUnzIxJSOsK/SIH?node-id=0:1',
    shortDescription: 'SIH 2022 Project UI',
    description: 'NMHP means National Medical & Health Portal. It is a SIH 2022 project. Our main aim was to reduce exploitations happening in the hospitals with the help of website. This UI describes the working of our website.',
    filter: ['ui']
  },
  'student-portfolio': {
    title: 'Student Portfolio',
    category: 'UI',
    date: 'Jun 2022',
    url: 'https://www.figma.com/file/ws2Hms5tuk4PgdJ5giPTdF/Student-Portfolio?node-id=0%3A1',
    shortDescription: "Figma design of Student's Portfolio",
    description: 'Student Portfolio UI made on FIGMA. It contains both desktop view and mobile view.',
    filter: ['ui']
  },
  'email-phone-extractor': {
    title: 'Email & Phone Extractor',
    category: 'Chrome Extenstion',
    date: 'Sep 2022',
    url: 'https://github.com/RAJ4823/Email-and-Phone-Number-Extractor',
    shortDescription: 'Simple Chrome Extenstion',
    description: 'It is a chrome Extension for extracting all Emails and Phone Numbers from a web page. You can download it as .txt or .csv file.',
    filter: ['extension']
  }
}
