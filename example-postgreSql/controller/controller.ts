import { RouterContext } from "https://deno.land/x/oak/mod.ts";

import { Courses } from '../models/model.ts';

type Context = RouterContext<Record<string | number, string | undefined>, Record<string, any>>;


export async function getAllCourses(ctx: Context) {
    try {
        const result = await Courses.getCourses();
        ctx.response.body = {
            courses: result.rows,
            onSuccess: true 
        }
    } catch (error) {
        ctx.response.body = {
            onSuccess:false
        }
    }
   
}