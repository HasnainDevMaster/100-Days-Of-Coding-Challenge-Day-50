// 100 Days Of Coding Challenge!

/** Question 150: “Synchronous vs Asynchronous: Understanding JavaScript Execution!”
Describe how asynchronous callbacks differ from synchronous code execution.*/

//----------------------------------------------------------------------------------

// Synchronous code execution:
console.log("This is a first synchronous statement");
console.log("This is a second synchronous statement");

/* Explanation:
In synchronous execution, each statement is executed one after the other.
The second console.log statement will not execute until the first one has completed.*/

// Asynchronous code execution:
console.log("This is a first asynchronous statement");

setTimeout(() => {
  console.log(
    "This is a second asynchronous statement, but it executes after 1 second"
  );
}, 1000);

console.log("This is a last asynchronous statement");

/* Explanation:
In asynchronous execution, certain operations (like setTimeout) are executed in the background.
"This is a last asynchronous statement" message is logged before,
the "This is a second asynchronous statement, but it executes after 1 secondAsynchronous Message",
because the latter is delayed by 1 second.*/
