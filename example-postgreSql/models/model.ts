import { getClient } from '../helper/helper.ts';

export class Courses{

    static async getCourses(){
        const courses = await getClient().query("SELECT * FROM courses;");
        return courses;
    }
}