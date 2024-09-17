// 100 Days Of Coding Challenge!

/** Question 148: “Delay Your Message with setTimeout!”
Demonstrate the use of the setTimeout() function to execute code after a delay.*/

//--------------------------------------------------------------------------------

// This function will log a message to the console after a delay of 2 seconds.
function delayedMessage() {
  console.log("This message is displayed after 2 seconds.");
}

// Using setTimeout to call the delayedMessage function after 2000 milliseconds (2 seconds).
setTimeout(delayedMessage, 2000);
