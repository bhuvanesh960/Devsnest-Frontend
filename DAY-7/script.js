//progam for problem-1

let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log(Object.keys(student));




//program for problem-2
console.log(student);
delete student.rollno;
console.log("after deletion:", student);



//program to problem-3

console.log("Length:", Object.keys(student).length);




//program to problem-4

var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }
];
console.log("Reading Status\n");
for (let items in library) {
  console.log("book:", library[items].title, "\nAuthor:", library[items].author, "\nStatus:", library[items].readingStatus);
}





//program for problem-5
let cylinder = [{
    r: 8,
    h: 10
  },
  {
    r: 9,
    h: 20
  },
  {
    r: 10,
    h: 30
  }
];
for (let item in cylinder) {
  let vol = 2 * Math.PI * cylinder[item].r * cylinder[item].h;
  vol = vol.toFixed(4);
  console.log("volume of cylinder:", item + ":" + vol);
}




//program for problem-6
var library = [{
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  }
];

library.sort(function (a, b) {

  console.log(b.libraryID, a.libraryID, b.libraryID - a.libraryID);
  return b.libraryID - a.libraryID;
});
console.log(library);