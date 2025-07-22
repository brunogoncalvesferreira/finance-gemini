import { app } from './app.ts'

app
  .listen({
    port: 8080,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
