const promptCommands = {
  "--help": {
    type: "consoleTx",
    text: "help",
  },
  "profile picture": {
    type: "image",
    image: "profilePicture",
    title: "This is me!",
  },
  clear: {
    type: "clear",
  },
};

export default promptCommands;
