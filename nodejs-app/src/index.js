require("./database").run();

const { app } = require("./express");
const routes = require("./router");

app.use("/information", routes);

const server = app.listen(3000, () => {
  console.log("Server is ready");
});

module.exports = { server };
