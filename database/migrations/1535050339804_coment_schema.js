'use strict'

const Schema = use('Schema')

class ComentSchema extends Schema {
  up () {
    this.create('coments', (table) => {
      table.increments()
      table.increments()
      table
        .integer('post_id')
        .unsigned()
        .notNullable()
        .reference('id')
        .inTable('post')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .reference('id')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('text').notNullable()
      table.boolean('like').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('coments')
  }
}

module.exports = ComentSchema
