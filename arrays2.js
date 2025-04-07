// Array Methods
// array.length();
// array.toString(); array.join(); array.join(" * "); 
// array.at(i); array[i];
// array.push(); array.unshift();
// array.pop(); array.shift();
// array.delete(); // deletes the array, but doesnot changes the index, creates holes in the array
// array1.concat(array2); array1.concat(array2, array3 , ....); // merging two arrays
// array1.concat("element"); 
// array.flat() // converts 
// array.splice(i,noOfElementsToBeRemoved,"element to be added"); // array.splice(i,noOfElementsToBeRemoved,[element to be added,.,.,.]); // array.splice(i,noOfElementsToBeRemoved);
// array.toSpliced(); // creates a new array and performs splice operation
// array.slice(i); array.slice(startIndex, endingIndex -1); // creates a new array then copies all the element from index value to last element

// array search
// array.indexOf(element); // array.lastIndexOf(element); // returns the index of the element in the array
// array.includes(element); // returns true if the element is present and returns false if the element is absent
// array.find();
// array.findIndex();
// array.findLastIndex();

// array sort
// array.sort();
// array.reverse();
// combine sort and reverse to create descending order sorting
// toSorted(); // creates a new array
// toReverse(); // creates a new array
// array.sort(function(a,b){return a - b})// numeric sort

// array iteration
// array.forEach(item,index,arr);
// array.map();
// array.filter();
// array.reduce();
// array.every();
// array.some();
// array keys();
// ...array // spread operator