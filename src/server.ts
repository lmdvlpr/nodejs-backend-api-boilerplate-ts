import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  // When "true" allows access from any frontend URL
  // In production, only the URLs that can access the API should be set, for example: "http://myawesomeapp:3000"
  origin: true,
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'API documentation',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

// Routes go here

app.get('/', () => {
  return 'Hello, world 👋'
})

app.listen({ port: env.PORT }).then(() => {
  console.log('🔥 HTTP server running!')
})
