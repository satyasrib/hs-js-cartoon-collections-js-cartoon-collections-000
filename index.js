
function dwarfRollCall(dwarves) {
var newdwarves = []
for (let i = 0; i< dwarves.length; i++) {
  newdwarves.push(i+1 +". "+ dwarves[i]);
}
return (newdwarves.join(" ") + " ")
}

function summonCaptainPlanet(planeteerCalls){
var newarray = [];
for (let i = 0; i< planeteerCalls.length; i++) {
  newarray.push(planeteerCalls[i].toUpperCase() + "!");
}
return newarray
}

function longPlaneteerCalls(words) {
  if (words.length > 4) {
    return true;
  } else {
    return false;
  }
}

function findTheCheese(foods) {
var cheese = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i< foods.length; i++) {
    for (var j = 0; j< 3 ; j++) {
      if (foods[i] === cheese[j])
      return foods[i];
    }
  }
return "no cheese!";
}
