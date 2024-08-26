const ABOUT_ME_DATA = {
  title: 'Hello...',
  introduction: [
    "I'm a Software Developer with great problem-solving and designing skills.",
    "I'm passionate about my work because I genuinely enjoy it. I enjoy facing challenges and always set goals to keep myself motivated.",
    "With a track record of developing impressive websites and successfully solving over 1500 competitive problems on platforms like Codechef, LeetCode, and Codeforces, I have honed my skills and gained valuable experience over the years.",
    "I'm a team player who adapts quickly and contributes positively to the work environment.",
    "Outside of work, I'm a big sports fan, especially cricket and esports like BGMI."
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
    company: "Corpository - A Yubi Company",
    roles: [
      {
        role: "Associate Software Engineer",
        duration: "Jun, 2024 - Present",
        location: "Ahmedabad",
        responsibilities: [
          "Contributing to various backend products and multiple projects.",
          "Learned and implemented web crawling techniques using Java.",
          "Gaining expertise in AWS services, including EC2, S3, and Lambda."
        ]
      },
      {
        role: "Software Engineer Intern",
        duration: "Feb, 2024 - May, 2024",
        location: "Ahmedabad",
        responsibilities: [
          "Learned Java, Spring Boot framework, MySQL and various Java-related technologies through hands-on experience.",
          "Became part of the 'Spider-Team,' where I focused on web crawling tasks.",
        ]
      }
    ]
  },
  {
    company: "Zero to Zee",
    roles: [
      {
        role: "Technical Lead",
        duration: "Jan, 2024 - Present",
        location: "Remote",
        responsibilities: [
          "Managing all technical aspects of the company’s products, with a focus on 'Prime Sender' and 'Mobbana'.",
          "Under my leadership, the user base for our product 'Prime Sender' has grown to 90k, with expectations to reach 100k soon.",
          "Currently leading the development of 'Mobbana,' a Google Meet extension for recording and transcribing, built from scratch with a new team."
        ]
      },
      {
        role: "Software Developer",
        duration: "Feb, 2023 - Jan, 2024",
        location: "Remote",
        responsibilities: [
          "Significantly contributed to the development and refinement of the two popular Chrome extensions 'Prime Sender' and 'Pro Sender'",
          "When I joined, the user base for Prime Sender was at 30k. Through my contributions, the user count doubled to 60k.",
          "Led a team of four developers, enhancing teamwork and increasing productivity.",
          "Communicated with clients globally, addressing their concerns and providing quick solutions."
        ]
      }
    ]
  }
];

const SKILLS_DATA = [
  { skill: "Front-end Web Development", percentage: 95 },
  { skill: "Full-stack Web Development", percentage: 75 },
  { skill: "AWS [S3, Lambda, RDS, DynamoDB]", percentage: 85 },
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
  },
  'login-system': {
    title: 'Login System',
    category: 'MERN Stack',
    date: 'Oct 2023',
    url: 'https://login-system-raj4823.onrender.com/',
    description: 'A MERN stack-based login system with user registration, secure authentication, profile management, password recovery with OTP, and email notifications, and more.'
  }
}