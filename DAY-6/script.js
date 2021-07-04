// program for problem-1


function is_array(inpu)
{
  let array_dummy=[];
  if(typeof inpu== typeof array_dummy)
  {
    return true;
  }
  return false;
}
console.log(is_array('w3resources'));
console.log(is_array([1, 2, 4, 0]));






//program for problem2

function array_clone(inpu)
{
  let dummy=inpu.slice();
  return dummy;
}

console.log(array_clone([1, 2, 4, 0]));
console.log(array_clone([1, 2, [4, 0]]));





//program to problem3


function first(inpu,index)
{
  if(inpu.length==0)
  {
    return [];
  }
  if(index>=1)
  {
    return inpu.slice(0,index);
  }
  else
  {
    return inpu[0];
  }
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));



//program to probelem4

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(', '));
console.log(myColor.join(' + '));




//program for problrm-5


let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let count = 1;
let temp = 0;
let item;

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) temp++;
    if (count < temp) {
      count = temp;
      item = arr[i];
    }
  }

temp = 0;
}

alert(item + " ( " + count+ " times ) ");