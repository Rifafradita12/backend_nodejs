// import FruitController
const { index, store, update, destroy } = require("./FruitController.js");

// membuat fungsi main
const main = () => {
  index();
  store("pisang");
  update(0, "pisang"); 
  destroy(2); 
};

main();
