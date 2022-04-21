import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User  from 'App/Models/User';

export default class UsersController {

    public async index(ctx: HttpContextContract) {
        return User.all();
    }

    public async store({request, response} : HttpContextContract) {

        const body = request.body();
        const user = await User.create(body);
        
        response.status(201);
        return user;
    
    }

    public async show({params}: HttpContextContract) {
        return await User.findOrFail(params.id);
    }

    public async update({params, request} : HttpContextContract) {
        
        const body = request.body();
        const user = await User.findOrFail(params.id)
        
        user.username = body.username;
        user.password = user.password;
        user.type_of_user = user.type_of_user;

        if (user.type_of_user == "freelancer") {

        } else if (user.type_of_user == "business") {

        } else if (user.type_of_user == "user") {

        } else {
// this part stands for admin

        }
        
        return user.save();
    }

    public async destroy() {
        return "sdsd"
    }
}
