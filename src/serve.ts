import fastify from 'fastify'

import { env } from './env'
import { transactionRoutes } from './routes/transactions'
import fastifyCookie from '@fastify/cookie'
// import crypto from 'node:crypto'

const app = fastify()

app.register(fastifyCookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('running!')
  })
