const httpSchema = process.env.HTTP_SCHEMA ?? 'http';
export const apiHost = process.env.API_TODO_HOST ?? 'localhost';
export const apiPort = process.env.API_TODO_PORT ?? 3001;

export const apiUrl = `${httpSchema}://${apiHost}:${apiPort}`;

