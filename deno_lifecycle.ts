//Deno lifecyle 

//Program lifecyle means it will trigger some event when certain event occurs. 

//Load -- it will run asynchronus code.
//unload -- it will run synchronus code


window.onload = (event)=>{
    console.log('OnLoad Lifecylce.....');
}

window.addEventListener('load', (event)=>{
    console.log(event, 'load...');
});
//using window.addEventListener we can create multiple instance, wheareas window.onload override.

console.log('!hola world...')
const buffer = new Uint8Array(1024); 
await Deno.stdin.read(buffer);


await Deno.writeFile('text.demo', buffer);
console.log('File created Successfully...');

window.addEventListener('unload',(event)=>{
    console.log('Unloaded......');
})