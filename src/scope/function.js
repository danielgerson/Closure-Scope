// Function Scope
function greeting () {
  let userName = 'Daniel';
  console.log(userName);

  if (userName === 'Daniel') {
    console.log(`Hola ${userName}`);
  }
}

greeting();
console.log(userName); // Error al momento de llamar variable, marca is not defined