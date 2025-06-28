

const day = "Friday";
const month = "September";
const date = 29;
const time = "21:49";

const macTimeDisplay = `${day.slice(0,3)} ${date} ${month.slice(0,3)} ${time}`;
console.log(macTimeDisplay)

// Before running code, answer the following - write down your answers:
// a) how many function calls are there in this file?
//two
// b) predict and explain what macTimeDisplay will evaluate to. You can use documentation to look up slice
//literal template gives the string output which is the Friday will be sliced to Fri and September will be sliced to Sep
//Fri 29 Sep 21:49