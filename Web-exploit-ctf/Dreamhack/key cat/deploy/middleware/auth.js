const { sign, verify } = require('../jwt');

const Auth = async (req, res, next) => {
    try {
        const TOKEN = req.cookies.session;
        if (TOKEN === undefined) {
            let token = await sign("key1");
            res.cookie('session', token, { maxAge: 3600000 });
            return next();
        }

        let { jwt_data, err } = verify(TOKEN);
        if (jwt_data !== undefined) {
            req.filename = jwt_data.filename;
            req.username = jwt_data.username;
        }

        if (err) {
            // console.log(err);
            return res.status(401).render("error", { "img_path": '/img/error.png', "err_msg": "Invalid token..." });
        }

        return next();


    } catch (e) {
        // console.log(e);
        return res.status(404).render("error", { "img_path": '/img/error.png', "err_msg": "File not found..." });;
    }



}

module.exports = {
    Auth
}   