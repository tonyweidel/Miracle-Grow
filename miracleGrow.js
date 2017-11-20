const tree = require('./tree.js');
const queue = require('./queue.js');
const Random = require('./Random.js');

function MiracleGrow(size){
  let forestSize = size;
  let plantingSeeds = new Queue();
  for(let x = 0;x < forestsize;x++){
    plantingSeeds.enqueue(Random().discreetRangeIn(1,200));
  }
  let forest = new Tree(0);
  for(let x = 0;x = plantingSeeds.length;x++){
    forest.add(new Tree(plantingSeeds.dequeue()));
  }
  return forest;
}

module.exports = miracleGrow;
