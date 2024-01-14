import { Router } from "express";

const healthRouter = Router();

healthRouter.use(
  "/",
  require("express-healthcheck")({
    healthy: function () {
      return { everything: "is ok" };
    },
  })
);

export { healthRouter };
