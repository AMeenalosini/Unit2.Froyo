//Create a prompt to enter the flavors of the Yogurt

const userinput = prompt("Enter the Froyo flavors separated by commas:");

//userInput --> vanilla,vanilla,vanilla,strawberry,coffee,coffee

//Move the values in userInput to an array with Split function using ,

const keys = userinput.split(",");
console.log(keys);

function OrderQty(keys){
  
  //Create an empty object
  const countObj = {};

    //For loop to iterate over the array and update the object
    for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
  
      // If the key already exists, increment its count
      if (countObj[key]) {
        countObj[key] += 1;
      } else {
      // Otherwise, initialize the key with a count of 1
        countObj[key] = 1;
      }
    }
    return countObj;
}

const result = OrderQty(keys);
console.log(result);