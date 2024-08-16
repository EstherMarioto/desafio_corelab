import type { HttpContext } from '@adonisjs/core/http'
import Note from '#models/note'

export default class NotesController {
  async index() {
    const notes = await Note.all()

    return notes
  }

  async store({ request, response }: HttpContext) {
    const body = request.body()
    const note = await Note.create(body)
    response.status(201)

    return { message: 'Nota criada com sucesso!', data: note }
  }

  async update({ request, params }: HttpContext) {
    const body = request.body()
    const note = await Note.findOrFail(params.id)
    note.title = body.title
    note.description = body.description
    note.isFavorite = body.is_favorite
    note.bgColor = body.bg_color
    await note.save()

    return { message: 'Nota atualizada com sucesso!', data: note }
  }

  async show({ params }: HttpContext) {
    const note = await Note.findOrFail(params.id)

    return { data: note }
  }

  async destroy({ params }: HttpContext) {
    const note = await Note.findOrFail(params.id)
    await note.delete()

    return { message: 'Nota excluída com sucesso!', data: note }
  }
}
