import express from "express";

let router = express.Router();

let initwebRoutes = (app) => {
    router.get('/', (rcq, res) => {
        return res.send('Hello Word with Quang Minh')
    });

    return app.use("/", router);
}

module.express = initwebRoutes;