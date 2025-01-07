const projects = [
    {
      title: "DFA/NFA Visualizer",
      duration: "Nov 2024 - Dec 2024",
      organization: "Sonoma State University",
      description: `
        Automata theory plays a very important role in computer science, yet many of its concepts can be abstract and difficult to visualize. 
        To resolve this, we developed a tool inspired by JFLAP, which was implemented using JavaScript and React. The only library utilized 
        for the drawing of the automaton was JointJS. This library facilitated the rendering of physical states and transitions onto the canvas. 
        The tool allows users to interactively create and analyze Deterministic and Non-Deterministic Finite Automata (DFA and NFA). It also 
        provides features that allow users to test string membership and evaluate DFA equivalence by using the cross-product algorithm. 
        By combining clear visualization and user-friendliness, our project simplifies automata-related problems and makes theoretical 
        concepts related to such machines more accessible.
      `,
      skills: ["JavaScript", "React.js", "JointJS", "Automata Theory"],
      githubLink: ["https://github.com/officialblake/Draw-DFA"],
      contributors: "Homero Arellano, Blake Marshall and Jacob Sellers",
    },
    {
      title: "Online Multiplayer Poker Game",
      duration: "Mar 2024 - May 2024",
      organization: "Senior Capstone Project",
      description: `
        For our senior capstone project, we created an online 3D poker game, specifically following the rules of 'No Limit Texas Hold'em'. 
        The project was broken into three main parts:
        
        1. PokerUI:
           - The frontend of the project, containing sections like a landing page, main menu, shop, create/join match, and the 3D room itself.
           - Communicated with the API for updating user traits and the WebSocket for handling the game state across all users.
        
        2. PokerAPI:
           - The backend API that communicated with a MySQL database hosted on AWS.
           - Handled user login information and user traits such as profile avatar, friends, and points.
           - Implemented using the Express.js library.
        
        3. PokerWebSocket:
           - Maintained the state of the game.
           - Built using the socket.io library for real-time communication.
      `,
      skills: [
        "JavaScript",
        "React.js",
        "Express.js",
        "Socket.io",
        "MySQL",
        "AWS",
        "3D Game Development",
        "WebSockets",
      ],
      githubLink: ["https://github.com/Diegoriv-era/pokerAPI", "https://github.com/Diegoriv-era/pokerWebSocket", "https://github.com/homero272/pokerUI"],
      contributors: "Diego Rivera",
    },
  ];
  
  export default projects;
  