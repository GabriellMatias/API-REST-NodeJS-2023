import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'
// import crypto from 'node:crypto'

const app = fastify()

app.get('/', async () => {
  const transactions = knex('transactions').select('*')

  // const table = knex('transactions').insert({
  //   id: crypto.randomUUID(),
  //   title: 'test trasaction',
  //   amount: 1000,
  // })

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('running!')
  })
