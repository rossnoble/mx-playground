import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const PORT = Number(process.env.PORT) || 4000;

async function startServer() {
  const app = new Hono();

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start Apollo Server
  await server.start();

  // Apply CORS middleware
  app.use(
    '/graphql',
    cors({
      origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
      credentials: true,
    })
  );

  // GraphQL endpoint
  app.post('/graphql', async (c) => {
    const body = await c.req.json();
    const response = await server.executeOperation(body);

    if (response.body.kind === 'single') {
      return c.json(response.body.singleResult);
    }

    return c.json({ errors: [{ message: 'Unexpected response' }] });
  });

  // Start Hono server
  serve({ fetch: app.fetch, port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
