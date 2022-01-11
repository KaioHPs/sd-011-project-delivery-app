const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const pathToKey = path.join(__dirname, '../../jwt.evaluation.key');
const secret = fs.readFileSync(pathToKey).toString().trim();

require('dotenv/config');

const tokenJwtDecoded = (token) => {
     try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (error) {
        return false;
    }
    };

    module.exports = {
        tokenJwtDecoded,
    };
