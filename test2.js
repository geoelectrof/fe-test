/*
Implement the "allPairs" method, which accepts 2 arrays, 1 array of unique meters and 1 array of unique mediums. It should return all the possible combinations of one meter and one medium.
If either array is empty, the method should return an empty list.

For example:
------------

allPairs(['meter1', 'meter2'], ['water', 'gas']) should return [['meter1', 'water'], ['meter2', 'water'], ['meter1', 'gas'], ['meter2', 'gas']]
allPairs([], ['water']) should return []

*/

// ar1 = ["meter1", "meter2"];
// ar2 = ['water', 'gas']
// ar2 = [];

function allPairs(ar1, ar2) {
  // TODO:: Do your stuff here...
  let result = [];
  ar1.forEach((ar1Item) => {
    ar2.forEach((ar2Item) => {
      result.push([ar1Item, ar2Item]);
    });
  });
  return result;
}

// console.log(allPairs(ar1, ar2))
