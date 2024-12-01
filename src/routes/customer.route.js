const express = require('express');
const app = express.Router();
const controller = require('../controllers/customer.controller');

app.get("/customers", controller.get);
app.get("/customers/:id", controller.getById);
app.get("/customers/name/:name", controller.getByName);
app.post("/customers", controller.create);
app.put("/customers/:id", controller.edit);
app.patch("/customers/:id", controller.patch);
app.delete("/customers/:id", controller.delete);
