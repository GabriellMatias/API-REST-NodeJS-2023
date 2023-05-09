import fastify from 'fastify'

import { transactionRoutes } from './routes/transactions'
import fastifyCookie from '@fastify/cookie'
// import crypto from 'node:crypto'

export const app = fastify()

app.register(fastifyCookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})
