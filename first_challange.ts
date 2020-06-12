//Task

//User prombt to enter web address, e.g: https//:google.com
//Then it should get the data from web address, and store it in new text file.

//If the input is not url just save the user entered value in text.

// const data = new TextEncoder();
// await Deno.writeFile("webdata.txt", data);


// Deno.stdin is type of file so it has method read.
//thus you can read from it by providing a Uint8Array as buffer and call Deno.stdin.read(buf)

console.log('Please enter some greetings word ::');

const buffer = new Uint8Array(1024);

//Inside buffer uint8Array all the input entered value will be stored...
await Deno.stdin.read(buffer);

//If we want to read Uint8Array value we have to decode it

const textDecoder = new TextDecoder();
const result = textDecoder.decode(buffer);
console.log('Entered Value ' + result);