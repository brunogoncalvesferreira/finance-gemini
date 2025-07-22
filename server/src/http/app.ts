import fastify from 'fastify'
import { appRoutes } from './routes/app-routes.ts'

export const app = fastify()

app.register(appRoutes)
