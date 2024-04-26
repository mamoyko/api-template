import express from "express";

const router = express.Router();

router.get("/v1", (_, res) => {
  res.json({
    message: "Welcome to my API",
  });
});

export default router;
