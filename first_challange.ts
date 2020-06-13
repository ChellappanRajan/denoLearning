//Task

//User prombt to enter web address, e.g: https//:google.com
//Then it should get the data from web address, and store it in new text file.

const buffer = new Uint8Array(1000);


//Read URL from prompt and save in buffer.
await Deno.stdin.read(buffer);
let textDecoder = new TextDecoder("utf-8");
let url = textDecoder.decode(buffer);
try {
    console.log(url.length,'URL length')
    const sendRequest = await fetch(url);
    const value = await sendRequest.json();

    await Deno.writeFile('success.txt',encodeData(JSON.stringify(value)));
    console.log('Done');
} catch (error) {
    console.log('Error...', url.length);
    await Deno.writeFile('error.txt', encodeData(JSON.stringify(`${url}\n`)));
    console.error('Error...');
}


function encodeData(value: string): Uint8Array{
    let encoder = new TextEncoder();
    console.log(encoder.encode(value));
    return encoder.encode(value);
}

//Summary

//To convert Uint8Array use TextEncode.
//To convert to Uint8Array to text use TextDecoder.

//Bug

//For some reason error always append extra characterss...