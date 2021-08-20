/*
You’ve been given an index.html file and a starter js file, and jQuery.

0. Source this file and the jquery.js files into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/
$(document).ready(function() {
  console.log('Step 0 complete! jquery and client.js loaded!');

  // Write your code here!

  // 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
    let highScore = 29;

  // 2. Make a new empty array called myScrabbleTiles.
    let myScrabbleTiles = [];

  // 3. Put these 6 tile objects into myScrabbleTiles:
  /*
    { tile: 'N', score: 1 }
    { tile: 'K', score: 5 }
    { tile: 'Z', score: 10 }
    { tile: 'X', score: 8 }
    { tile: 'D', score: 2 }
    { tile: 'A', score: 1 }
  */

    function addTiles(tileLetter,tileScore){ // create a function to take in the tile and score of tile objects
      const scrabbleTile = { // created a variable to hold tile information
        title: tileLetter, // set tileLetter input to title attribute
        score: tileScore // set tileScore input to score attribute
      };
      myScrabbleTiles.push(scrabbleTile); // add the tile to myScrabbleTiles array
      return scrabbleTile; // return the scrabbleTile
    }

    addTiles( 'N', 1 ); // adding tile to collection
    addTiles( 'K', 5 ); // adding tile to collection
    addTiles( 'Z', 10 ); // adding tile to collection
    addTiles( 'X', 8 ); // adding tile to collection
    addTiles( 'D', 2 ); // adding tile to collection
    addTiles( 'A', 1 ); // adding tile to collection

    console.log(myScrabbleTiles); // checking additions to collection

  // 4. Remove the last tile from myScrabbleTiles.

    console.log(myScrabbleTiles.pop()); // removes last object from myScrabbleTiles
    console.log(myScrabbleTiles); // checking tile was removed

  // 5. Add the following new tile to myScrabbleTiles:
  /*
    { tile: 'F', score : 4 }
  */

  addTiles( 'F', 4 );  //adding tile to collection
  console.log(myScrabbleTiles); //checking tile was added


  // 6. Write a function that takes in an array. The function will use a for-loop and returns the sum of all the scores in the given array.
    //tiles.scores

    function sumItems( arrayofItems ){
      let sum = 0; // creating variable to hold result
      for (let items of arrayofItems){ // looping through items in the array
        sum += items; // add each item to sum
      }
      return sum; //return sum
    }

  //7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".

  let tileScoreArray = []; //creating array to hold the tile scores

  for (tiles of myScrabbleTiles){
    tileScoreArray.push(tiles.score); // for each item in myScrabbleTiles add the 'score' value to myScrabbleTiles array
  }

    let myScore = sumItems(tileScoreArray); // sum the scores of the titles using sumItems function, store as variable 'myScore'
    console.log(`This should equal 30: ${myScore}`); // checking output

  // function getTileScores(collection){
  //   let tileValue = [];
  //   for (tiles in myScrabbleTiles){
  //     let eachTile = myScrabbleTiles[tiles];
  //     tileValue.push(eachTile.score);
  //   } sumItems(tileValue);
  // }
  //
  // console.log(getTileScores(myScrabbleTiles));

  // 8. Check whether or not your score is higher than the highScore.
    // 8-1 If your score is higher, change highScore to the new high score.


// STRETCH GOALS!!!

  // 9. Using jQuery, Append to the DOM the highScore value.

  // 10. Using jQuery, Append to the DOM myScrabbleTiles as an unordered list


// DO NOT WRITE CODE BEYOND HERE
});
