//run 10,000 simulations of the Monty Hall Problem and print the results

let prizeInSelectedTotal = 0;
let prizeInHiddenTotal = 0;

for (let i = 0; i < 10000; i++) {
  let prizeDoor = Math.floor(Math.random() * 3) + 1;
  let selectedDoor = Math.floor(Math.random() * 3) + 1;
  let revealedDoor = getRevealedDoor(prizeDoor, selectedDoor);
  let hiddenDoor = 6 - selectedDoor - revealedDoor;

  if (prizeDoor === selectedDoor) prizeInSelectedTotal++;
  if (prizeDoor === hiddenDoor) prizeInHiddenTotal++;
}

let percentInSelectedDoor = prizeInSelectedTotal / 10000;
let percentInHiddenDoor = prizeInHiddenTotal / 10000;

console.log(`Prize in Selected door: ${(percentInSelectedDoor * 100).toFixed(2)}%`);
console.log(`Prize in Hidden door: ${(percentInHiddenDoor * 100).toFixed(2)}%`);

function getRevealedDoor(prizeDoor, selectedDoor) {
  if (prizeDoor === selectedDoor) {
    return prizeDoor % 3 + 1;
  }
  return 6 - prizeDoor - selectedDoor;
}