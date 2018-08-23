'use strict'

/**
 * Resourceful controller for interacting with coments
 */
class ComentController {
  /**
   * Show a list of all coments.
   * GET coments
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new coment.
   * GET coments/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new coment.
   * POST coments
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single coment.
   * GET coments/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing coment.
   * GET coments/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update coment details.
   * PUT or PATCH coments/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a coment with id.
   * DELETE coments/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ComentController
