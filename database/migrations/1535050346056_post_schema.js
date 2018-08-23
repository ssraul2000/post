'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .reference('id')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASADE')
      table.string('image')
      table.string('text')
      table.boolean('like').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
