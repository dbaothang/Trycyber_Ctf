const fs = require('fs');
const jwt = require('jsonwebtoken');


const PATH_PREFIX = __dirname + '/keys'

const sign = async (filename) => {
    const KEY = fs.readFileSync(PATH_PREFIX + '/' + filename, 'utf-8');
    return jwt.sign({ filename: filename, username: 'dreamhack' }, KEY, { keyid: filename, algorithm: 'HS256' });
}

const verify = (token) => {
    let jwt_data = undefined
    let error = undefined
    jwt.verify(token, (header, cb) => { cb(null, fs.readFileSync(PATH_PREFIX + '/' + header.kid, 'utf-8')); }, { algorithm: 'HS256' }, (err, data) => {

        error = err;
        jwt_data = data;

    }
    )


    return { 'jwt_data': jwt_data, 'err': error };

}

module.exports = {
    sign,
    verify
}   
