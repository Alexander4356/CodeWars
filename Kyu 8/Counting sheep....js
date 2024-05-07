function countSheeps(sheep) {
  let trueInArrive = 0;

  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      trueInArrive += 1;
    }
  }
  console.log(trueInArrive);
  return trueInArrive;
}
