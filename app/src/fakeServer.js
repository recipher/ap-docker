import { Server, Model } from 'miragejs';

export function makeFakeServer({ environment = process.env.NODE_ENV } = {}) {
  const server = new Server({
    environment,

    models: {
      messages: Model
    },
  
    routes() {
      this.namespace = '/api';

      this.get('/messages');
      this.post('/messages', (schema, request) => {
        const data = JSON.parse(request.requestBody).message;
        return schema.messages.create(data);
      });
    },

    seeds(server) {
      server.db.loadData({ messages: [ { id: 1, text: 'Hello!' } ] });
    }
  });
  
  return server;
};