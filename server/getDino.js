const dino = require("../dino.json");

const getDino = (req, res) => {
    console.log(res)
    return res.status(200).send(dino)
};

module.exports = getDino;