import app from './app';
import graphqlServer from './graphqlServer';
import http from 'http';

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen({ port }, () => console.log(`Now browse to http://localhost:${port}${graphqlServer.graphqlPath}`));

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
