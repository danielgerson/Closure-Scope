function fruits () {
  if (true) {
    var fruit = 'Apple';
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana';
    console.log(fruit2); 
    console.log(fruit3); 
  }
  console.log(fruit); // function scope
  console.log(fruit2); // block scope
  console.log(fruit3); // block scope
}

fruits();