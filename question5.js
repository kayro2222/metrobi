const findHighestFloor = (numberOfEggs) => {
    const minimunDrop = Array.from({ length: numberOfEggs + 1 }, () => Array.from({ length: 100 + 1 }, () => 0));
  
    for (let egg = 1; egg <= numberOfEggs; egg++) {
      minimunDrop[egg][0] = 0;
      minimunDrop[egg][1] = 1;
    }
  
    for (let floor = 1; floor <= 100; floor++) {
      minimunDrop[1][floor] = floor;
    }
  
    for (let egg = 2; egg <= numberOfEggs; egg++) {
      for (let floor = 2; floor <= 100; floor++) {
        minimunDrop[egg][floor] = Number.MAX_SAFE_INTEGER;
        for (let dropFloor = 1; dropFloor <= floor; dropFloor++) {
          const drops = 1 + Math.max(minimunDrop[egg - 1][dropFloor - 1], minimunDrop[egg][floor - dropFloor]);
          minimunDrop[egg][floor] = Math.min(minimunDrop[egg][floor], drops);
        }
      }
    }
  
    return minimunDrop[numberOfEggs][100];
}

console.log(findHighestFloor(4)) //8