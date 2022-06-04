const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (ws) => {
  ws.on('message', (message) => {
    server.clients.forEach((clients) => {
      if (clients.readyState === WebSocket.OPEN) {
        clients.send(message);
      }
    });
  });
  ws.send('Welcome!');
});
