import { Redis } from "ioredis";

const redis = new Redis({
  port: 12000,
  host: "127.0.0.1",
  password: "minhasenha",
});

export { redis };
