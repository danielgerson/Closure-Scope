
function greeting () {
  let userName = 'Daniel';

  function displayUserName ( ) {
    return `Hello ${userName}`;
  }

  return displayUserName;
}

const variableGreeting = greeting();
console.log(variableGreeting);
console.log(variableGreeting());
