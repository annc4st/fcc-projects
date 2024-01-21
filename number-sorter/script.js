const sortButton = document.getElementById("sort");


const sortInputArray = (event) => {
    event.preventDefault();
  
    // .getElementsByClassName() returns an array-like object. You can use the spread operator to convert it into an array.
    //  =>
    // const inputValues = [...document.getElementsByClassName("values-dropdown")];
    // You need to get the values from your select elements. However, these values are strings, and you need them to be numbers.

// Since you have an array, you can use the map method to convert each value to a number. Do this by passing a callback function to map that takes a dropdown parameter and returns Number(dropdown.value).
const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));
// const sortedValues = bubbleSort(inputValues);

// const sortedValues = selectionSort(inputValues);
// const sortedValues = insertionSort(inputValues);

const sortedValues = inputValues.sort((a, b) => {
    return a -b
});
  updateUI(sortedValues);
  }

const updateUI = (array = []) => {
    array.forEach((num, i) => {
      const outputValueNode = document.getElementById(`output-value-${i}`);
      outputValueNode.innerText = num;
    })
  }

  /* bubble sort
  starts at the beginning of the array and 'bubbles up' unsorted values towards the end, 
  iterating through the array until it is completely sorted.  */
  const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        console.log(array, array[j], array[j + 1]);
  
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }

  /*selection sort. 
  Selection sort works by finding the smallest value in the array, 
  then swapping it with the first value in the array. Then, it finds the next smallest value 
  in the array, and swaps it with the second value in the array. 
  It continues iterating through the array until it is completely sorted.
  */

  const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < array.length; j++) {
        console.log(array, array[j], array[minIndex]);
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      const temp = array[i];
      array[i] = array[minIndex]; //swapping
      array[minIndex] = temp;
    }
    return array;
  }


/* insertion sort. 
This algorithm works by building up a sorted array at the beginning of the list. 
It begins the sorted array with the first element. 
Then it inspects the next element and swaps it backward into the 
sorted array until it is in a sorted position, and so on.
*/
 /*For this algorithm, you'll want to use a while loop. This loop needs two conditions:
    First, it should not run beyond the beginning of the array (accessed with j).
  Second, the loop should not run after it finds a value smaller than the current value.
  To prevent an infinite loop, decrement j inside your loop.*/

  /*On each iteration of your while loop, it is finding an element that is larger than your current value. 
  You need to move that element to the right to make room for your current value.
Do so by assigning the value at the j index to the next index. */

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      const currValue = array[i];
      let j = i - 1;
  
      while(j>=0 && array[j] > currValue){
        array[j+1] = array[j];
        j--;
      }
    array[j + 1] = currValue;
  }
  return array;
}

  sortButton.addEventListener("click", sortInputArray);