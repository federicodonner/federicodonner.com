const promptCommands = [
  {
    words: [
      "help",
      "-help",
      "-Help",
      "--help",
      "---help",
      "–help",
      "ayuda",
      "-ayuda",
      "--ayuda",
      "–ayuda",
    ],
    type: "consoleTx",
    text: "help",
  },
  {
    words: ["profile picture", "profilepicture", "foto perfil"],
    type: "image",
    image: "profilePicture",
    title: "This is me!",
    alt: "Profile picture",
  },
  {
    words: ["clear", "borrar", "clf"],
    type: "clear",
  },
];

export default promptCommands;
