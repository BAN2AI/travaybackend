import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BookingsController {
    public async index(ctx: HttpContextContract) {
        return "Gets pets";
    }

    public async store({request} : HttpContextContract) {
        return {
            message: 'POst request',
            body: request.body()
        }
    }

    public async show({params}: HttpContextContract) {
        return "Params " + params.id;
    }

    public async update() {
        return "sdsd"
    }

    public async destroy() {
        return "sdsd"
    }
}
