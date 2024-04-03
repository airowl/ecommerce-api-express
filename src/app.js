const express = require("express");
const userRouter = require("./router/user");
const itemRouter = require("./router/item");
const cartRouter = require("./router/cart");

require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(userRouter);
//app.use(itemRouter)
//app.use(cartRouter)

const port = process.env.PORT;

app.listen(port, () => {
    console.log("server listening on port " + port);
});
