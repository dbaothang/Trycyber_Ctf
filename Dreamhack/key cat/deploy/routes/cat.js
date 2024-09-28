const router = require('express').Router();
const { Auth } = require('../middleware/auth');

const FLAG_FILE_NAME = process.env.FLAG_FILE_NAME || "flag.txt"
const FLAG_CONTENT_1 = process.env.FLAG_CONTENT_1 || "DH{aaaaaaaaaaaa"
const FLAG_CONTENT_2 = process.env.FLAG_CONTENT_2 || "bbbbbbbbbbbbbbbb}"

router.get('/', Auth, (req, res) => {

    const img_dir = '/img';

    try {
        const min = 1;
        const max = 3;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const img_path = img_dir + '/' + randomNumber + '.png';
        return res.render("cat", { "img_path": img_path });
    } catch (e) {

        const img_path = img_dir + '/' + 'error.png';
        return res.status(500).render("cat", { "img_path": img_path });
    }

})

router.get('/flag', Auth, (req, res) => {

    if (req.filename !== undefined && req.filename.indexOf(FLAG_FILE_NAME) !== -1) {

        return res.status(200).send(`🙀🙀🙀🙀🙀🙀 ${FLAG_CONTENT_1}`);
    }
    else {
        return res.status(401).render("error", { "img_path": '/img/error.png', "err_msg": "Unauthorized..." });
    }
})

router.get('/admin', Auth, (req, res) => {

    if (req.username !== undefined && req.username === 'cat_master') {
        return res.status(200).send(`Hello Cat Master😸 this is for you ${FLAG_CONTENT_2}`);
    }
    else {
        return res.status(403).send("Hello dreamhack! But I've got nothing you want");
    }
})

module.exports = router