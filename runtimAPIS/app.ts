//similar to cd... moving
try {
        // create directory
    await Deno.mkdir(`${Deno.cwd()}/helo`,{mode: 0o777});
    
    Deno.chdir(`${Deno.cwd()}/userA`);
    console.log('succss');
    //change folder permison
    //0oownerpersmission,grouppermission,otherpermission
    // await Deno.chmod("./text.ts", 0o777);
    console.log(Deno.execPath())
    // Deno.exit(5);
    // const file = await Deno.open("./text.txt");
    // console.log(file);
    // Useful when open file it will work with file
    // Deno.close(file.rid);

    // Finally, you can also specify the depth to which it will format.
    const depth = Deno.inspect({a: {b: {c: {d: 'hello'}}}}, {depth: 2});
    console.log(depth);
    // const listener1 = Deno.listen({ port: 80 })
    // console.log(listener1);

    //Will create temporary director
    //If we did not pass any argument it will crate some radom 
    const temp = await Deno.makeTempDir();
    console.log(temp, 'Created')

    

} catch (error) {
    console.log(error == Deno.errors.NotFound);
}