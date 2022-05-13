export const httpSchema = process.env.HTTP_SCHEMA ?? 'http';
export const appHost = process.env.APP_TODO_HOST ?? 'localhost';
export const appPort = process.env.APP_TODO_PORT ?? 3001;

export const appUrl = `${httpSchema}://${appHost}:${appPort}`;