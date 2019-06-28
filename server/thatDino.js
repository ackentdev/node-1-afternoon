const dino = require('../dino.json');

const thatDino = (req, res) => {
    console.log(req.params)
    const thatOne = dino.filter(element => element.Name === req.params.name);
    res.status(200).send(thatOne);
}

module.exports = thatDino;