

var implicit = require("./implicit");

var items = {
  abacus: "beady",
  cat: "purr",
};

var numbers = [20, 25, 10, -10, 50];

var thing = "cat";
if(implicit.get(items[thing])) {
  console.log("Saved so much time finding '%s'", _); // "Saved so much time finding 'furry'"
}

implicit.get(items.cat) && console.log(_); // "purr"

var squared = implicit.map(numbers, function() { return _ * _ });

console.log(squared); // [ 400, 625, 100, 100, 2500 ]

