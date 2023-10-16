import { Redis } from "ioredis";

const redis = new Redis({
  port: 14658,
  host: "redis-14658.c263.us-east-1-2.ec2.cloud.redislabs.com",
  password: "mtFEmlFjOtnJDhJzGXJRKVSZYo11ndqa",
});

export { redis };
