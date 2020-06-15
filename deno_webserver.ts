import { serve } from 'http/server.ts';

//import map is unstable API,
//Simple importmap per project.
//Does not support ::std namespace

//To run we can either confi denon.json or  deno run --importmap=import_map.json --unstable deno_webserver.ts

const server = serve({port:3000});

console.log('http://localhost:3000');

for await (const request of server){
    const contenlength = request.contentLength;
    if(request.method === 'POST' && request.url === '/save' && contenlength){

        const buffer = new Uint8Array(contenlength);

        let totalBytesRead = 0;
        
        while(true){
            const bytesRead = await request.body.read(buffer);
            if(bytesRead){
                break;
            }
            totalBytesRead = totalBytesRead + totalBytesRead;
            if(totalBytesRead >= contenlength){
            break;
            }    
        }

       await Deno.writeFile('contact.txt', buffer);
       console.log('submittedsuccesfully');

        const headers = new Headers();
        headers.set('Location','/submittedsuccesfully');
        request.respond({headers,status:303});
    }
    else{
        const headers = new Headers();
        headers.set('Content-Type','text/html');
        request.respond({body:`
        <h1>Contact Details</h1>
        <form method="post" action="/save">
        <input type="text" name="username">
        <button type="submit">Submit</button>
        </form>
        `,headers});
    }
}