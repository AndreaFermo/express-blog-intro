const express = require("express");
const dotenv = require("dotenv").config();
const postsController = require("./controllers/posts");

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {

    res.send('Benvenuto nel mio blog!');

});

app.get("/posts", postsController.index)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Exemple app listening on port http://localhost:${process.env.PORT}}`);
})