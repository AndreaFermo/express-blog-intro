const posts = require("../db/posts.json");

function index(req, res) {
    res.format({
        html: () => {
            const html = ["<h1>Lista dei Post</h1>"]

            html.push("<ul>");

            for (const post of posts) {
                html.push(
                    `<li>
                        <h2>${post.title}</h2>
                        <p>${post.content}</p>
                        <p>${generateTags(post.tags)}</p>
                        <img src="/imgs/posts/${post.image}" alt="${post.title}" style="width: 250px">
                        <hr>
                    </li>`
                );
            }

            html.push("</ul>");
            res.send(html.join(""));

        },
        json: () => {
            res.type("json").send({
                totalPosts: posts.length,
                list: posts
            })
        },
        default: () => {
            res.status(406).send("Not Acceptable");
        }

    });
}

function generateTags(array) {
    let string = "";
    array.forEach(element => {
        string += (`<span>${element}</span>  `);
    });
    return string;
}

module.exports = {
    index
}