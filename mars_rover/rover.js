// Rovers
var marsRover = {
  position: [0,0],
  direction: 'N',
  name: 'Mars Rover'
};

var saturnRover = {
  position: [0,1],
  direction: 'N',
  name: 'Saturn Rover'
};

// Go Forward command
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

// Wrap around properties
if (rover.position[0] == 10){
  rover.position[0] = 0
}

if (rover.position[1] == 10){
  rover.position[1] = 0
}

// Obstacles
if (rover.position[0] == 3 && rover.position[1] == 0) {
  console.log("You can't move forward, there is an obstacle in your way!");
  goBackwards(rover);
  return;
}

if (rover.position[0] == 5 && rover.position[1] == 6) {
  console.log("You can't move forward, there is an obstacle in your way!");
  goBackwards(rover);
  return;
}

if (rover.position[0] == 8 && rover.position[1] == 2) {
  console.log("You can't move forward, there is an obstacle in your way!");
  goBackwards(rover);
  return;
}

// Bumping onto other rover
if (marsRover.position[0] == saturnRover.position[0] && marsRover.position[1] == saturnRover.position[1]) {
  console.log("Oops! Seems like you've bumped onto your fellow explorer!");
  goBackwards(rover);
}

  console.log("New " + rover.name + "'s Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };

  if (rover.position[0] < 0){
    rover.position[0] = 9
  }

  if (rover.position[1] < 0){
    rover.position[1] = 9
  }

  if (rover.position[0] == 3 && rover.position[1] == 0) {
    console.log("You can't move backwards, there is an obstacle in your way!");
    goForward(rover);
    return;
  }

  if (rover.position[0] == 5 && rover.position[1] == 6) {
    console.log("You can't move backwards, there is an obstacle in your way!");
    goForward(rover);
    return;
  }

  if (rover.position[0] == 8 && rover.position[1] == 2) {
    console.log("You can't move backwards, there is an obstacle in your way!");
    goForward(rover);
    return;
  }

  if (marsRover.position[0] == saturnRover.position[0] && marsRover.position[1] == saturnRover.position[1]) {
    console.log("Oops! Seems like you've bumped onto your fellow explorer!");
    goForward(rover);
  }

  console.log("New " + rover.name + "'s Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };

  console.log("New " + rover.name + "'s Rover Direction: " + rover.direction);
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'S'
      break;
  };

  console.log("New " + rover.name + "'s Rover Direction: " + rover.direction);
}

// goForward(marsRover);
// goBackwards(marsRover);
// turnRight(marsRover);
// turnLeft(marsRover);

function moveMarsRover(directions) {
  for(var move = 0; move < directions.length; move++) {
    switch (directions[move]) {
      case 'f':
        goForward(marsRover)
        break;
      case 'b':
        goBackwards(marsRover)
        break;
      case 'r':
        turnRight(marsRover)
        break;
      case 'l':
        turnLeft(marsRover)
        break;
      default:
        console.log(direction[move] + " = is not a valid instruction");
    }
  }
}

function moveSaturnRover(directions) {
  for(var move = 0; move < directions.length; move++) {
    switch (directions[move]) {
      case 'f':
        goForward(saturnRover)
        break;
      case 'b':
        goBackwards(saturnRover)
        break;
      case 'r':
        turnRight(saturnRover)
        break;
      case 'l':
        turnLeft(saturnRover)
        break;
      default:
        console.log(direction[move] + " = is not a valid instruction");
    }
  }
}

moveMarsRover("ffrf")
moveSaturnRover("fflf")
