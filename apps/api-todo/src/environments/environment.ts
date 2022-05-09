const port = process.env.API_TODO_PORT ? +process.env.API_TODO_PORT : 8080;

type Host = {
  local: string;
  docker: string;
};

const host: Host = {
  local: `http://localhost:${port}`,
  docker: `http://api:${port}`,
};

export let env: string;

if (!process.env.APP_ENV) {
  env = host['local'];
} else if (process.env.APP_ENV === 'docker') {
  env = host['docker'];
} else {
  throw new Error(
    `Environment ${
      process.env.APP_ENV
    } does not exist. It should be one of the following ${Object.keys(host)}`
  );
}
export default env;
