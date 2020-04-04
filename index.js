require("dotenv").config();
const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Database connection
let uri = process.env.MONGODB_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Modules
const home = require("./routes/home");
const categories = require("./routes/categories");
const adminIndex = require("./routes/admin/index");
const { get: createGet, post: createPost } = require("./routes/admin/create");
const { get: updateGet, post: updatePost } = require("./routes/admin/update");
const adminDelete = require("./routes/admin/delete");

app.get("/", home);
app.get("/categories", categories);
app.get("/admin", adminIndex);
app.get("/admin/create", createGet);
app.post("/admin/create", createPost);
app.get("/admin/update/:id", updateGet);
app.post("/admin/update", updatePost);
app.get("/admin/delete/:id", adminDelete);

app.listen(port, () => console.log(`Shopping cart running on port ${port}!`));
