// Demonstrating 'let'
function showLet() {
  let myVariable = 2; // Block-scoped variable
  alert("Outside block scope: " + myVariable);
  if (true) {
    let myVariable = 3; // This 'myVariable' is different from the outside one
    alert("Inside block scope: " + myVariable);
  }
  alert("After block scope: " + myVariable);
}

// Demonstrating 'var'
function showVar() {
  var myVariable = 2; // Function-scoped variable
  alert("Outside function scope: " + myVariable);
  if (true) {
    var myVariable = 3; // This 'myVariable' is the same as the outside one
    alert("Inside block but function scope: " + myVariable);
  }
  alert("After block still in function/global scope: " + myVariable);
}

// Demonstrating 'const'
function showConst() {
  const myVariable = 2; // Block-scoped constant
  alert("Constant value: " + myVariable);
  // Uncommenting the next line will cause an error because 'const' cannot be reassigned
  // myVariable = 3; // Error: Assignment to constant variable.
}
