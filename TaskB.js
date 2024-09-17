"use strict";
// 100 Days Of Coding Challenge!
/** Question 149:
Explain the concept of the event loop in JavaScript with an example.*/
//---------------------------------------------------------------------
/* The event loop is a mechanism that allows JavaScript to perform non-blocking operations.
It handles asynchronous callbacks by placing them in a queue and executing them when the call stack is empty.*/
// Example to demonstrate the event loop:
console.log("This is a first message."); // This will be logged first.
// setTimeout is used to simulate an asynchronous operation.
setTimeout(() => {
    console.log("This is a second message, but it is logged after the asynchronous operation.");
}, 0);
console.log("This is a last message."); // This will be logged second, before the asynchronous message.
/* Explanation:
1. "This is a first message" is logged immediately.
2. setTimeout places the callback in the event queue to be executed after 0 milliseconds.
3. "This is a last message" is logged immediately after "This is a first message".
4. The event loop then picks up the callback from the queue and logs "This is a second message, but it is logged after the asynchronous operation."*/
