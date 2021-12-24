import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async create({ request: req, response: res }: HttpContextContract) {
    const data = req.only(['name', 'email'])
    return res.json(data)
  }
}
