const ENV = process.env;

const API = {
  PORT: ENV.API_PORT ?? "3000",
};

const JWT = {
  SECRET: ENV.JWT_SECRET ?? "secret",
  ALGORITHM: ENV.JWT_ALGORITHM ?? "EdDSA",
};

export { API, JWT };
