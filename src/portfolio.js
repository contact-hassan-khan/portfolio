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
      role: "SOC Analyst Intern",
      company: "Chaitanya Cyber Strix Technologies Private Limited",
      companylogo: require("./assets/images/Soc-intern.png"),
      date: "Nov 2023 – Jan 2024",
      desc: "Performed hands-on cybersecurity operations using enterprise security tools for threat detection and analysis",
      descBullets: [
        " Successfully met all internship objectives in security monitoring, incident response, and vulnerability assessment",
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
  title: "Projects",
  subtitle: "SOME TOOL THAT I HAVE CREATED",
  projects: [
    {
      image: require("./assets/images/Phishguard.png"),
      projectName: "PhishGuard",
      projectDesc: "Detect phishing links from URLs or QR codes in seconds",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://phishguard-ynep.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Phishguard.png"),
      projectName: "NetScan CLI",
      projectDesc: "Lightning-fast local-network reconnaissance Discover hosts, open ports, banners and CVEs – in one command.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/contact-hassan-khan/netscan-cli"
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
    "Achievements, Certifications, Award Letters and Some Stuff that I have done !",

    achievementsCards: [
  {
    title: "Published Researcher",
    subtitle:
      "Published abstracts of 2 peer-reviewed papers on virtual laboratory technologies and implementations at international conferences, contributing to educational technology research.",
    image: require("./assets/images/researchpaperlogo.jpg"),
    imageAlt: "",
    footerLink: [
      {
        name: "Certification-1",
        url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
      },
      {
        name: "Certification-2",
        url: "https://drive.google.com/file/d/1K9KQB2Ca0d_UYMhoZA0uHEz6MfWbBv31/view?usp=sharing"
      }
    ]
  },
    {
      title: "CEH v13 Certification (In Progress)",
      subtitle:
        "Certified Ethical Hacker v13 candidate demonstrating advanced penetration testing and ethical hacking skills for cybersecurity professionals.",
      image: require("./assets/images/CEHv13.png"),
      imageAlt: "CEH Certification Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "McKinsey.org Forward Program",
      subtitle: "Completed prestigious strategic thinking and data-driven decision making program, developing business acumen and leadership skills.",
      image: require("./assets/images/McKinseyforward.png"),
      imageAlt: "McKinsey Forward Logo",
      footerLink: [
        {name: "Program Details", url: "https://www.mckinsey.com/forward/learning-platform"},
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/21d26265-5b17-401d-9747-e9eef0635a00/public_url"
        }
      ]
    },
    {
      title: "Cisco Cybersecurity Foundations",
      subtitle:
        "Completed Cisco Cybersecurity Foundations training, gaining essential knowledge in cybersecurity principles and practices.",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/ab1ae454-51a9-43e9-b477-273cb1433ec0/public_url"
        },
       
      ]
    }
  ],
  display: true // Set true to show this section, defaults to false
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
