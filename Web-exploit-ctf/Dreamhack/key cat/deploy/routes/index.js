const { sign } = require('../jwt');
const router = require('express').Router();
const { Auth } = require('../middleware/auth')

router.get('/', Auth, async (req, res) => {

    try {
        const filename = req.query.fn;
        if (filename !== undefined) {
            const token = await sign(filename);
            return res.send(`Hey this is new token ${token}`);
        }
        return res.send('Hi 😺');
    } catch (e) {
        return res.status(404).send('File not found....');

    }


})

module.exports = router