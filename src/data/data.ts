export const workData =
  "Hi I am a full-stack developer based in Melbourne,\
 I specialize in React development using tools such as Typescript, Next.js, Node.js\
 Firebase, MongoDB and PostgreSQL along with many others, My educational background is\
 a bachelors in Computer Science with a major in Data Science, in addition to multiple\
 courses from online platforms such as Udemy."

export const workSkills = {
  frontend: [
    "React",
    "Typescript",
    "Next.js",
    "HTML, CSS, JavaScript",
    "Chakra-UI",
    "Material-UI",
    "Bootstrap",
    "Redux/MobX/MST/Context",
    "Jest & RTL",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
  ],
}

export const projectGridData = [
  {
    title: "Issue Tracker",
    routeUrl: "issueTracker",
    demoUrl: "https://issue-tracker2.vercel.app/",
    githubUrl: "https://github.com/Bijayb37/IssueTracker2",
    description:
      "An Issue-Tracker built with React with a nodeJS backend using express and mongoDB",
    imageSrc: "/issueTracker.png",
    role: ["full stack developer"],
    tech: [
      "react",
      "redux",
      "html5",
      "css3",
      "bootstrap",
      "mongoDB",
      "expressJS",
      "bcrypt&jsonWebToken",
    ],
  },
  {
    title: "F.R.I.E.N.D.S Group Chat App",
    routeUrl: "friends",
    description:
      "An App to create chatrooms of one or more people, with authentication by firebase",
    imageSrc: "/chatapp.png",
    role: ["full stack developer"],
  },
  {
    title: "Color Pallete",
    routeUrl: "colorpallete",
    demoUrl: "https://color-pallete-with-hooks.vercel.app",
    githubUrl: "https://github.com/Bijayb37/Color-Pallete-with-hooks",
    description:
      "A Utility that lets you create css color palettes, with ability to change color brightness and options for rgb, rgba, and hex",
    imageSrc: "/colors.png",
    role: ["full stack developer"],
    tech: ["react", "html5", "css3", "Material-UI"],
  },
  {
    title: "Twit Social Media App",
    routeUrl: "twit",
    demoUrl: "https://bb-twit.netlify.app",
    githubUrl: "https://github.com/Bijayb37/twit-fullStack",
    description:
      "An Social Media site where one can post messages, with users and messages stored in a mongoDB database",
    imageSrc: "/twit.png",
    role: ["full stack developer"],
    tech: [
      "react",
      "redux",
      "html5",
      "css3",
      "bootstrap",
      "mongoDB",
      "expressJS",
      "bcrypt&jsonWebToken",
    ],
  },
]

export const projectPageData = {
  friends: {
    tech: [
      "react",
      "nextJS",
      "TypeScript",
      "Chakra-UI",
      "Firebase Auth",
      "FireStore",
    ],
    demoUrl: "https://firebase-chatrooms.vercel.app/",
    githubUrl: "https://github.com/Bijayb37/Firebase-chatrooms",
    description:
      "F.R.I.E.N.D.S chatroom is an instant messaging app built with TypeScript, React, Next.JS, Chakra-UI, and Firebase app to create chatrooms either between two people or a group chat with many people, that are saved in a cloud database.",
    list: [
      "Authentication with firebase auth connected to google, or simple email and password",
      "Guest Login and account",
      "Chat with a single person added by email",
      "Chatroom with multiple people",
      "Sidebar chat navigation for all the chatrooms",
      "Responsive UI for desktop and mobile",
      "Loading spinners for backend processes",
    ],
    images: ["/chat_01.png", ["/chat_02mobile.png", "/chat_01mobile.png"]],
  },
  issueTracker: {
    tech: [
      "React",
      "React Router",
      "Bootstrap",
      "Redux & Thunk",
      "MongoDB",
      "NodeJs",
      "ExpressJs",
      "Bcrypt",
      "Vercel & Netlify",
      "Mongoose",
    ],
    demoUrl: "https://issue-tracker2.vercel.app/",
    githubUrl: "https://github.com/Bijayb37/IssueTracker2",
    description:
      "Issue Tracker that connects a React frontend to a node and mongo backend, with a RESTful api and full CRUD operations, with features such as issue history and comments, password authentication with jsonwebtoken and bcrypt.",
    list: [
      "Frontend built with ReactJS, Redux, React-router, React hooks, ES6,7,8",
      "Backend built with NodeJS, ExpressJS, RESTful APIs, MongoDB, Mongoose ODM",
      "Authentication built with bcrypt and jsonwebtoken",
      "CRUD projects with the ability to add multiple members",
      "CRUD issues with title, description, status",
      "CRUD notes for issues, for guiding other members",
      "Error management on front end for guiding users and custom errors on backend for guiding developers",
      "Responsive UI for desktop and mobile",
      "Loading spinners for backend processes",
      "Ability to filter issues by their status",
    ],
    images: ["/issue_01.png", ["/issue_01mobile.png", "/issue_02mobile.png"]],
  },
  colorpallete: {
    demoUrl: "https://color-pallete-with-hooks.vercel.app",
    githubUrl: "https://github.com/Bijayb37/Color-Pallete-with-hooks",
    description:
      "Create custom css color pallettes and store them for future use, also settings for opacity and multiple color formats",
    tech: ["react", "html5", "css3", "Material-UI"],
    images: [
      "/colors_01.png",
      "/colors_02.png",
      ["/colors_01mobile.png", "/colors_02mobile.png"],
    ],
    list: [
      "React front end with Material-UI for styling",
      "Create Custom Css color pallettes",
      "Support for multiple color types eg. rgb, rgba, hex",
      "Copy to clipboard functionality",
    ],
  },
  twit: {
    tech: [
      "React",
      "React Router",
      "Bootstrap",
      "Redux & Thunk",
      "MongoDB",
      "NodeJs",
      "ExpressJs",
      "Bcrypt",
      "Vercel & Netlify",
      "Mongoose",
    ],
    demoUrl: "https://bb-twit.netlify.app",
    githubUrl: "https://github.com/Bijayb37/twit-fullStack",
    description:
      "Social media site with authentication using bcrypt and jsonwebtoken, able to create, edit, like messages",
    list: [
      "Frontend built with ReactJS, Redux, React-router, React hooks, ES6,7,8",
      "Backend built with NodeJS, ExpressJS, RESTful APIs, MongoDB, Mongoose ODM",
      "Authentication built with bcrypt and jsonwebtoken",
      "CRUD projects with the ability to add multiple members",
      "CRUD issues with title, description, status",
      "CRUD notes for issues, for guiding other members",
      "Error management on front end for guiding users and custom errors on backend for guiding developers",
      "Responsive UI for desktop and mobile",
      "Loading spinners for backend processes",
      "Ability to filter issues by their status",
    ],
    images: ["/twit_01.png", ["/twit_01mobile.png", "/twit_02mobile.png"]],
  },
}
