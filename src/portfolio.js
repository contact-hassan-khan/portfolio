/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username:  process.env.REACT_APP_USERNAME || "Hassan Khan",
  title: `Hi, I'm  Hassan khan`,
  subTitle: emoji(
    "I'm a Computer Engineering graduate and a passionate Cybersecurity Enthusiast. I enjoy exploring ethical hacking, penetration testing, digital forensics, and cyber defense. Skilled with tools like Wireshark, Burp Suite, Nmap, Metasploit, Linux, GitHub, and scripting with Python and Bash."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1K9KQB2Ca0d_UYMhoZA0uHEz6MfWbBv31/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/contact-hassan-khan",
  linkedin: "https://www.linkedin.com/in/contact-hassankhan",
  gmail: "hassan14kha@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@hassan14kha",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Cybersecurity Enthusiast exploring the world of ethical hacking, scripting, and Linux",
  skills: [
    emoji(
      "⚡ Skilled in penetration testing and vulnerability analysis.  "
    ),
    emoji("⚡  Hands-on with tools like Nmap, Wireshark, Burp Suite, and Metasploit."),
    emoji(
      "⚡ Proficient in Git, GitHub, and collaborative coding practices."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [  
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }, 
    {
      skillName: "Cybersecurity",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Ethical Hacking",
      fontAwesomeClassname: "fas fa-user-secret"
    },
    {
      skillName: "Kali Linux",
      fontAwesomeClassname: "fab fa-linux"
      
    },
    
    {
      skillName: "Wireshark",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Nmap",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Metasploit",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "Burp Suite",
      fontAwesomeClassname: "fas fa-bug"
      
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Cryptography",
      fontAwesomeClassname: "fas fa-lock"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Keystone School of Engineering",
      logo: require("./assets/images/kse.png"),
      subHeader: "Computer Engineering",
      duration: "April 2021 -  Pursuing",
      desc: "Participated in the research of Systematic review on challenges in learning in virtual space: VIRTUAL LAB and published 1 papers.",      
      descBullets: [
        "Participated in Hackathon.",
        "Participated in various workshops and seminars."
      ]
    },
    {
      schoolName: "Poona College of Arts, Science and Commerce",
      logo: require("./assets/images/PC-.jpg"),
      subHeader: "HSC",
      duration: "March 2019 - February 2021",
      desc: "Participated in NSS and worked as a volunteer in various events.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cybersecurity",
      progressPercentage: "75%"
    },
    {
      Stack: "Linux",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Intern",
      company: "Mitu skillologies",
      companylogo: require("./assets/images/logo2.jpg"),
      date: "April 2024 – May 2024",
      desc: "Analyzed financial data and generated reports that provided key insights into the financial health of thecompany. Cleaned and manipulated raw data. Performed exploratory data analysis on large datasets toidentify patterns and trends.",
      descBullets: [
        " Analyzed 891-passenger dataset with pandas and matplotlib. Built logistic regression model achieving 85% accuracy in predicting survival outcomes.",
      ]
    },
    

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set true to show this section, defaults to false
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "https://medium.com/@hassan14kha/what-is-devops-bridging-the-gap-between-development-and-operations-1b299472113c",
      title: "What is DevOps? Bridging the Gap Between Development and Operations",
      description:
        "DevOps is a cultural and technical movement that unites development and operations "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9890467034",
  email_address: "hassan14kha@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
